import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/lib/client";
import isAuthorized from "@/app/api/auth/[...nextauth]/auth-helpers";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(blogs, { status: 200 });
}

export async function POST(request: NextRequest) {
  if (!(await isAuthorized()))
    return NextResponse.json("not Authorized", { status: 401 })

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  try {
    await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        img: body.img,
        createdAt: DateHandler.generateDateString(Date.now()),
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

class DateHandler {
  private static dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: '2-digit'
  }

  static generateDateString(dateAsNumber: number): string {
    const currentDate = new Date(dateAsNumber)
    return currentDate.toLocaleDateString('de-DE', this.dateFormat)
  }
}
