import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { ApiResponse, FileUploadStrategy } from "./upload-strategy.util";
import crypto from "crypto";
import sharp from "sharp";

export class ImageUploadStrategy implements FileUploadStrategy {
    private static readonly ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/JPG', 'image/jpg']
    private static readonly JPEG_QUALITY = 80

    constructor(
        private s3Client: S3Client,
        private bucketName: string,
        private region: string
    ) { }

    validate(file: File): void {
        if (!ImageUploadStrategy.ALLOWED_MIME_TYPES.includes(file.type)) {
            throw new Error(`Unsupported file type: ${file.type}`)
        }
    }

    generateFileName(file: File): string {
        const randomString = crypto.randomBytes(8).toString('hex')
        return `${randomString}-${file.name}`
    }

    async upload(file: File): Promise<ApiResponse> {
        try {
            const buffer = await this.optimizeImage(await file.arrayBuffer())
            const fileName = this.generateFileName(file)

            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: this.bucketName,
                    Key: fileName,
                    Body: buffer,
                    ContentType: file.type
                })
            )

            return ApiResponse.success(this.generateFileUrl(fileName))
        } catch (error) {
            return ApiResponse.error("Upload -(image)- to AWS S3 failed!: ", 500)
            console.error(error)
        }
    }

    private async optimizeImage(buffer: ArrayBuffer): Promise<Buffer> {
        return sharp(Buffer.from(buffer))
            .jpeg({ quality: ImageUploadStrategy.JPEG_QUALITY, progressive: true })
            .toBuffer()
    }

    private generateFileUrl(fileName: string): string {
        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${fileName}`;
    }
}