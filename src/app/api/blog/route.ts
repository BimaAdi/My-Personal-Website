import { NextResponse } from "next/server";
import { getPaginateBlogService } from "@/server/services/blog";

export async function GET(request: Request) {
	// parse and validate query param
	const { searchParams } = new URL(request.url);

	let page = searchParams.get("page");
	let selected_page = 1;
	if (page !== null) {
		selected_page = parseInt(page);
	}

	let page_size = searchParams.get("page_size");
	let selected_page_size = 10;
	if (page_size !== null) {
		selected_page_size = parseInt(page_size);
	}

	let search = searchParams.get("search");

	const result = await getPaginateBlogService({
		page: selected_page,
		page_size: selected_page_size,
		search,
	});
	return NextResponse.json(result.json, { status: result.status });
}
