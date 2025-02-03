import sharp from "sharp";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID!,
  },
});

async function optimizeImage(buffer: Buffer) {
  const optimizedBuffer = await sharp(buffer)
    .jpeg({ quality: 80, progressive: true })
    .toBuffer();
  return optimizedBuffer;
};


export async function POST(request: NextRequest) {
  const allowedTypes = ["image/jpeg", "image/png"];

  const formData = await request.formData();
  const file = formData.get("image") as File; // as File because of Type safety und get function um file zu extrahieren

  if (!file)
    return NextResponse.json({ error: "File is required" }, { status: 400 });

  const randomName = crypto.randomBytes(8).toString("hex");

  //jetzt file in buffer konvertieren, damit AWS die Datei akzeptieren/laden kann
  // const buffer = Buffer.from(await file.arrayBuffer());
  const buffer = await file.arrayBuffer();
  const optimizedBuffer = await optimizeImage(Buffer.from(buffer));

  const fileName = `${randomName}-${file.name}`;

  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ message: `Der Bild Typ: ${file.type} wird nicht unterstützt` }, { status: 400 });
  }

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: optimizedBuffer,
    ContentType: file.type,
  };

  try {
    const command = new PutObjectCommand(uploadParams);
    await s3Client.send(command);
    console.log("File uploaded successfully:", fileName);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    return NextResponse.json({ success: true, fileUrl }, { status: 201 }); //zurück geben der amazon aws URL für das frontend
  } catch (error) {
    console.log("AWS upload failed:", error);
    return NextResponse.json(
      { error: "Internal server error, uploading to AWS" },
      { status: 500 }
    );
  }
}