import prisma from "@/prisma/lib/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }) {
  const uniqueBlog = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!uniqueBlog)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  return NextResponse.json(uniqueBlog);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const test = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!test)
    return NextResponse.json({ error: "blog not found" }, { status: 404 });

  await prisma.blog.update({
    where: {
      id: test.id,
    },
    data: {
      title: body.title,
      content: body.content,
      img: body.img,
    },
  });

  return NextResponse.json(
    { title: body.title, content: body.content, img: body.img },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await prisma.blog.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!body)
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  await prisma.blog.delete({
    where: {
      id: body.id,
    },
  });
  return NextResponse.json(body, { status: 200 });
}
