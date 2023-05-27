import { NextResponse } from "next/server";
import {
  getDetailBlog,
  getDetailTag,
  paginateBlog,
  readBlog,
  readTag,
} from "@/db/query";
import { NotFoundSchema } from "@/schemas/common";
import { BlogDetailSchema } from "@/schemas/blog";
import dayjs from "dayjs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // parse and validate query param
  const { id } = params;

  // get detail blog from db
  let blogs = readBlog();
  let tags = readTag();
  let blog = getDetailBlog({ blogs, id });

  // format json response
  if (blog === null) {
    let notFoundResponse = NotFoundSchema.parse({ message: "blog not found" });
    return NextResponse.json(notFoundResponse, { status: 404 });
  }

  let detail_blog = BlogDetailSchema.parse({
    id: blog.id,
    title: blog.title,
    link: blog.link,
    tag: blog.tags.map((y) => {
      let detail_tag = getDetailTag({ tags, id: y });
      if (detail_tag === null) {
        return null;
      }
      return {
        id: detail_tag.id,
        name: detail_tag.name,
      };
    }),
    created_at: dayjs(blog.created_at).format("YYYY-MM-DD"),
    body: "# Title",
  });

  return NextResponse.json(detail_blog, { status: 200 });
}
