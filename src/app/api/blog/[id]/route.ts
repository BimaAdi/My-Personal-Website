import { NextResponse } from "next/server";
import { getDetailBlogService } from "@/server/services/blog";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const result = await getDetailBlogService({ id });
  return NextResponse.json(result.json, { status: result.status })
}
