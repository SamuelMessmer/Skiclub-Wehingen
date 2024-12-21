import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID!,
  },
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("image") as File; // as File because of Type safety und get function um file zu extrahieren

  if (!file)
    return NextResponse.json({ error: "File is required" }, { status: 400 });

  const randomName = crypto.randomBytes(8).toString("hex");

  //jetzt file in buffer konvertieren, damit AWS die Datei akzeptieren/laden kann
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${randomName}-${file.name}`;

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  };

  try {
    const command = new PutObjectCommand(uploadParams);
    await s3Client.send(command);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    return NextResponse.json({ success: true, fileUrl }, { status: 201 }); //zurück geben der amazon aws URL for das frontend
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error, uploading to AWS" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("image") as File; // as File because of Type safety und get function um file zu extrahieren

  if (!file)
    return NextResponse.json({ error: "File is required" }, { status: 400 });

  //jetzt file in buffer konvertieren, damit AWS die Datei akzeptieren/laden kann
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = "";

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  };

  try {
    const command = new PutObjectCommand(uploadParams);
    await s3Client.send(command);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    return NextResponse.json({ success: true, fileUrl }, { status: 201 }); //zurück geben der amazon aws URL for das frontend
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error, uploading to AWS" },
      { status: 500 }
    );
  }
}
