import { NextResponse } from "next/server";
import dayjs from "dayjs";
import { readBlog, readTag } from "@/server/db/query";
import { getDetailTag } from "@/server/repositories/tag";
import {
  PaginateBlogType,
  QueryParamsBlogSchema,
} from "@/shared/schemas/blog";
import {
  InternalServerErrorType,
  UnprocessableEntityType,
} from "@/shared/schemas/common";
import { paginateBlog } from "@/server/repositories/blog";

export async function GET(request: Request) {
  try {
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

    let validateQueryParam = QueryParamsBlogSchema.safeParse({
      page: selected_page,
      page_size: selected_page_size,
    });
    if (validateQueryParam.success === false) {
      return NextResponse.json({
        message: validateQueryParam.error
      } satisfies UnprocessableEntityType, { status: 422 });
    }

    // read from "db" ;)
    let blogs = readBlog();
    let tags = readTag();
    let { data, num_data, num_page } = paginateBlog({
      blogs: blogs,
      page: selected_page,
      page_size: selected_page_size,
    });

    // format json response
    let responseOk = {
      counts: num_data,
      page_count: num_page,
      page: selected_page,
      page_size: selected_page_size,
      results: data.map((x) => {
        return {
          id: x.id,
          title: x.title,
          link: x.link,
          tags: x.tags.map((y) => {
            let detail_tag = getDetailTag({ tags, id: y });
            if (detail_tag === null) {
              return null;
            }
            return {
              id: detail_tag.id,
              name: detail_tag.name,
            };
          }),
          created_at: dayjs(x.created_at).format("YYYY-MM-DD"),
        };
      })
    } satisfies PaginateBlogType

    // return response
    return NextResponse.json(responseOk, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      error: err
    } satisfies InternalServerErrorType, { status: 500 })
  }
}
