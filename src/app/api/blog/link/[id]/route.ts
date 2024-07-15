import { NextResponse } from "next/server";
import { getDetailBlogByLinkService } from "@/server/services/blog";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const result = await getDetailBlogByLinkService({ link: params.id });
	return NextResponse.json(result.json, { status: result.status });
}
