import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";


const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID!,
    },
});

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("pdf") as File | null;

    if (file == null) {
        console.log("Die Datei die hochgelanden werden soll war 'null'");
        return NextResponse.json({ error: "Keine Datei hochgeladen" }, { status: 400 });
    }

    const randomName = crypto.randomBytes(8).toString("hex");

    // Datei in ArrayBuffer umwandeln
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const fileName = `${randomName}-${file.name}`;
    // muss mir noch einen key überlegen der für die DB funktioniert 

    const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName, // funktioniert gerade noch nicht deshalb
        Body: buffer,
        ContentType: file.type,
    };

    try {
        await s3Client.send(new PutObjectCommand(uploadParams));

        const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
        return NextResponse.json(fileUrl, { status: 201 });
    } catch (error) {
        console.error("Fehler beim Speichern des PDFs:", error);
        return NextResponse.json({ error: "Interner Serverfehler" }, { status: 500 });

    }

}
