import sharp from "sharp";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


export async function POST(request: NextRequest) {
  const s3Service = new S3Service(s3Config)

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) return ApiResponse.error('File is required', 400)

    FileHandler.validateFileType(file.type)

    const imageBuffer = Buffer.from(await file.arrayBuffer())
    const optimizedBuffer = await ImageOptimizer.optimize(imageBuffer)
    const fileName = FileHandler.generateUniqueFileName(file.name)

    await s3Service.uploadFile(fileName, optimizedBuffer, file.type)

    const fileUrl = `https://${s3Config.bucketName}.s3.${s3Config.region}.amazonaws.com/${fileName}`
    return ApiResponse.success(fileUrl)
  } catch (error) {
    console.error('File upload failed:', error)

    if (error instanceof Error) {
      return ApiResponse.error(error.message, 400)
    }
    return ApiResponse.error('Internal server error', 500)
  }
}

// Configuration interface for better type safety
interface S3Config {
  region: string
  credentials: {
    accessKeyId: string
    secretAccessKey: string
  }
  bucketName: string
}

// Configuration (could be moved to separate config file)
const s3Config: S3Config = {
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  bucketName: process.env.AWS_BUCKET_NAME!,
}


class S3Service {
  private client: S3Client
  private config: S3Config

  constructor(config: S3Config) {
    this.client = new S3Client({
      region: config.region,
      credentials: config.credentials,
    })
    this.config = config
  }

  async uploadFile(fileName: string, buffer: Buffer, contentType: string) {
    const command = new PutObjectCommand({
      Bucket: this.config.bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: contentType,
    })

    await this.client.send(command)
  }
}

// Utility functions
class FileHandler {
  private static readonly ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png']

  static validateFileType(mimeType: string): void {
    if (!this.ALLOWED_MIME_TYPES.includes(mimeType)) {
      throw new Error(`Unsupported file type: ${mimeType}`)
    }
  }

  static generateUniqueFileName(originalName: string): string {
    const randomString = crypto.randomBytes(8).toString('hex')
    return `${randomString}-${originalName}`
  }
}


// Response handler
class ApiResponse {
  static error(message: string, status: number) {
    console.log("Error, " + message + " status: " + status)
    return NextResponse.json({ error: message }, { status })
  }

  static success(fileUrl: string) {
    return NextResponse.json({ success: true, fileUrl }, { status: 201 })
  }
}


// Service classes for better separation of concerns
class ImageOptimizer {
  private static readonly JPEG_QUALITY = 80

  static async optimize(buffer: Buffer): Promise<Buffer> {
    return sharp(buffer)
      .jpeg({ quality: this.JPEG_QUALITY, progressive: true })
      .toBuffer()
  }
}
