import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const berita = await prisma.berita.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(berita);
}

export async function POST(req: Request) {
  const body = await req.json();

  const berita = await prisma.berita.create({
    data: {
      judul: body.judul,
      isi: body.isi,
    },
  });

  return NextResponse.json(berita);
}
