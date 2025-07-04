import { S3Client } from "@aws-sdk/client-s3"
import { NextRequest, NextResponse } from "next/server"
import { UploadResult, UploadStrategyFactory } from "./upload-strategy.util"
import isAuthorized from "../auth/[...nextauth]/auth-helpers"

const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

export async function POST(request: NextRequest) {
    if (!(await isAuthorized()))
        return NextResponse.json("not Authorized", { status: 401 });

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
        return ApiResponse.fromResult(result)
    } catch (error) {
        if (error instanceof Error) {
            return ApiResponse.error(error.message, 400)
        }
        return ApiResponse.error('Unknown error', 500)
    }
}


// Response handler
class ApiResponse {
    static fromResult(result: UploadResult) {
        return result.success
            ? NextResponse.json(result, { status: 201 })
            : NextResponse.json(result, { status: 400 })
    }

    static error(message: string, status: number) {
        console.log("Error, " + message + " status: " + status)
        return NextResponse.json(
            { success: false, error: message },
            { status }
        )
    }
}
