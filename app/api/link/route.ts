import prisma from "@/prisma/lib/clientLinkData";
import { NextResponse } from "next/server";

export async function GET() {
    const links = await prisma.linkData.findMany({
        orderBy: {
            id: "asc",
        },
    });

    if (!links)
        return NextResponse.json({ error: "link not found" }, { status: 404 });
    return NextResponse.json(links, { status: 200 });
}