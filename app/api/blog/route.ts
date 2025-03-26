import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/lib/client";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(blogs, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);


  const dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: '2-digit'
  }

  const timestamp = Date.now();
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('de-DE', dateFormat);

  if (body.img == null)
    return NextResponse.json({ message: "Bild wird nicht korrekt hochgeladen" }, { status: 400 });

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  try {
    await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        img: body.img,
        createdAt: formattedDate,
      },
    });

    return NextResponse.json(body, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error while uploading to db" },
      { status: 500 }
    );
  }
}
