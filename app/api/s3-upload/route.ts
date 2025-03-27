import { S3Client } from "@aws-sdk/client-s3"
import { NextRequest, NextResponse } from "next/server"
import { ApiResponse, UploadStrategyFactory } from "./upload-strategy.util"

const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File

        if (!file) return ApiResponse.error("No file provided. File is required!", 400)

        const uploadStrategy = UploadStrategyFactory.createStrategy(
            file.type,
            s3Client,
            process.env.AWS_BUCKET_NAME!,
            process.env.AWS_REGION!
        )

        uploadStrategy.validate(file)
        const result = await uploadStrategy.upload(file)

        if (!result)
            return NextResponse.json(result)
        return NextResponse.json(result)
    } catch (error) {
        if (error instanceof Error)
            return ApiResponse.error(error.message, 400)
        return ApiResponse.error('Unknown error', 500)
    }
}