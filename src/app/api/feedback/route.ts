import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "&/prisma/client";
export const dynamic = "force-static";

const createFeedbackSchema = z.object({
  title: z.string().min(1).max(255),
  details: z.string().min(1).max(255),
});

export async function GET() {
  const response = await prisma.feedback.findMany({
    orderBy: {
      createdAt: "desc",
    },
    cacheStrategy: { swr: 60, ttl: 60 },
  });
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createFeedbackSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const response = await prisma.feedback.create({
    data: {
      title: body.title,
      details: body.details,
    },
  });

  return NextResponse.json(response, { status: 201 });
}
