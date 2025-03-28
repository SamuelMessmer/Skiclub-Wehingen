import crypto from "crypto";
import { FileUploadStrategy, UploadResult } from "./upload-strategy.util";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";


export class PdfUploadStrategy implements FileUploadStrategy {
    private static readonly ALLOWED_MIME_TYPES = ['application/pdf']

    constructor(
        private s3Client: S3Client,
        private bucketName: string,
        private region: string
    ) { }

    validate(file: File): void {
        if (!PdfUploadStrategy.ALLOWED_MIME_TYPES.includes(file.type)) {
            throw new Error(`Unsupported file type: ${file.type}`)
        }
    }

    generateFileName(file: File): string {
        const randomString = crypto.randomBytes(8).toString('hex')
        return `${randomString}-${file.name}`
    }

    async upload(file: File): Promise<UploadResult> {
        try {
            const buffer = Buffer.from(await file.arrayBuffer())
            const fileName = this.generateFileName(file)

            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: this.bucketName,
                    Key: fileName,
                    Body: buffer,
                    ContentType: file.type
                })
            )

            return {
                success: true,
                fileUrl: this.generateFileUrl(fileName),
                status: 200
            }
        } catch (error) {
            console.error(error);
            return {
                success: false,
                status: 500,
                errorMessage: "Upload -(PDF)- to AWS S3 failed!"
            }
        }
    }

    private generateFileUrl(fileName: string): string {
        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${fileName}`;
    }
}