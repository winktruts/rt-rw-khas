import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const kas = await prisma.kas.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(kas);
}

export async function POST(req: Request) {
  const body = await req.json();

  const kas = await prisma.kas.create({
    data: {
      namaWarga: body.namaWarga,
      nominal: body.nominal,
      kategori: body.kategori,
      tanggal: new Date(body.tanggal),
      rt: body.rt,
      status: body.status,
    },
  });

  return NextResponse.json(kas);
}
