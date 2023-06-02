import { NextResponse } from "next/server";
import { readBlog, readTag, readBlogMd } from "@/server/db/query";
import { getDetailTag } from "@/server/repositories/tag";
import { NotFoundType, InternalServerErrorType } from "@/shared/schemas/common";
import { BlogDetailType } from "@/shared/schemas/blog";
import dayjs from "dayjs";
import { getDetailBlog } from "@/server/repositories/blog";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // parse and validate query param
    const { id } = params;

    // get detail blog from db
    let blogs = readBlog();
    let tags = readTag();
    let blog = getDetailBlog({ blogs, id });

    // format json response
    if (blog === null) {
      return NextResponse.json(
        { message: "blog not found" } satisfies NotFoundType,
        { status: 404 }
      );
    }

    let detail_blog = {
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
      body: readBlogMd(blog.link),
    } satisfies BlogDetailType;

    return NextResponse.json(detail_blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      error: err
    } satisfies InternalServerErrorType, { status: 500 })
  }
}
