import prisma from "@/prisma/lib/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const links = await prisma.linkData.findMany({ orderBy: { id: "asc" } });

  if (!links)
    return NextResponse.json({ error: "link not found" }, { status: 404, headers: { "Cache-Control": "no-store" } });
  return NextResponse.json(links, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}
