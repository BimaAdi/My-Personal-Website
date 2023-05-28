import { NextResponse } from "next/server";
import { readBlog, readTag } from "@/server/db/query";
import { getDetailTag } from "@/server/repositories/tag";
import { NotFoundSchema } from "@/shared/schemas/common";
import { BlogDetailSchema } from "@/shared/schemas/blog";
import dayjs from "dayjs";
import { getDetailBlog } from "@/server/repositories/blog";

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
    tags: blog.tags.map((y) => {
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
