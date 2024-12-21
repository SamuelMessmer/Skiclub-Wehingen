import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      id: "desc",
    },
  });

  if (!blogs)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  return NextResponse.json(blogs, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const timestamp = Date.now();
  const date = new Date(timestamp);
  const datumdb = date.toLocaleDateString();

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  try {
    await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        img: body.img,
        createdAt: datumdb,
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
