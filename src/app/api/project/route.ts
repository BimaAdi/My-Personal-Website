import { NextResponse } from "next/server";
import { getPaginateProjectService } from "@/server/services/project";

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

  const result = await getPaginateProjectService({
    page: selected_page,
    page_size: selected_page_size,
  });
  return NextResponse.json(result.json, { status: result.status });
}
