import { NextResponse } from "next/server";
import dayjs from "dayjs";
import { getDetailTag, paginateBlog, readBlog, readTag } from "@/db/query";
import { PaginateBlogSchema, QueryParamsBlogSchema } from "@/schemas/blog";
import {
  InternalServerErrorSchema,
  UnprocessableEntitySchema,
} from "@/schemas/common";

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

  let validateQueryParam = QueryParamsBlogSchema.safeParse({
    page: selected_page,
    page_size: selected_page_size,
  });
  if (validateQueryParam.success === false) {
    let validationMessage = UnprocessableEntitySchema.safeParse({
      message: validateQueryParam.error,
    });
    if (validationMessage.success === true) {
      return NextResponse.json(validationMessage.data, { status: 422 });
    } else {
      let error_response = InternalServerErrorSchema.parse({
        error: validationMessage.error,
      });
      return NextResponse.json(error_response, { status: 500 });
    }
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
  let results = data.map((x) => {
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
  });
  let parse = PaginateBlogSchema.safeParse({
    counts: num_data,
    page_count: num_page,
    page: selected_page,
    page_size: selected_page_size,
    results,
  });

  // return response
  if (parse.success === true) {
    return NextResponse.json(parse.data, { status: 200 });
  } else {
    let error_response = InternalServerErrorSchema.parse({
      error: parse.error,
    });
    return NextResponse.json(error_response, { status: 500 });
  }
}
