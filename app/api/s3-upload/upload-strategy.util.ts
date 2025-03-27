import { S3Client } from "@aws-sdk/client-s3"
import { NextResponse } from "next/server"
import { ImageUploadStrategy } from "./image-upload.strategy"
import { PdfUploadStrategy } from "./pdf-upload.strategy"


export interface FileUploadStrategy {
    validate(file: File): void
    generateFileName(file: File): string
    upload(file: File): Promise<ApiResponse>
}

export class UploadStrategyFactory {

    static createStrategy(
        fileType: string,
        s3Client: S3Client,
        bucketName: string,
        region: string
    ): FileUploadStrategy {
        switch (fileType) {
            case 'image/jpeg':
            case 'image/png':
            case 'image/JPG':    
                return new ImageUploadStrategy(s3Client, bucketName, region)
            case 'application/pdf':
                return new PdfUploadStrategy(s3Client, bucketName, region)
            default:
                throw new Error(`Unsupported file type: ${fileType}`)
        }
    }
}

// Response handler
export class ApiResponse {
    static error(message: string, status: number) {
        console.log("Error, " + message + " status: " + status)
        return NextResponse.json({ error: message }, { status })
    }

    static success(fileUrl: string) {
        return NextResponse.json({ success: true, fileUrl }, { status: 201 })
    }
}
