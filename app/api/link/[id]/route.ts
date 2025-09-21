import prisma from "@/prisma/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const linkId = parseInt(params.id, 10);

    if (isNaN(linkId)) {
        return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const link = await prisma.linkData.findUnique({
        where: {
            id: linkId,
        },
    });

    if (!link)
        return NextResponse.json({ error: "link not found" }, { status: 404 });
    return NextResponse.json(link, { status: 200 });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const test = await prisma.linkData.findUnique({
        where: {
            id: parseInt(params.id),
        }
    })

    if (test == null)
        return NextResponse.json({ error: "Link wurde nicht gefunden" }, { status: 404 });

    try {
        await prisma.linkData.update({
            where: {
                id: parseInt(params.id),
            },
            data: {
                document: body.document,
            }
        });

        return NextResponse.json(body, { status: 200 });
    } catch (error) {
        console.log("Fehler beim updaten -(link)-, Internal server error: " + error);

        return NextResponse.json({ error: "Internale server error, währen dem updaten der Datenbank" }, { status: 500 });
    }
}
