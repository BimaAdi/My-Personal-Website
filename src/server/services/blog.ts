import { BlogDetailLinkType } from "@/shared/schemas/blog";
import { NotFoundType, InternalServerErrorType } from "@/shared/schemas/common";
import dayjs from "dayjs";
import { marked } from "marked";
import { readBlog, readTag, readBlogMd } from "../db/query";
import { getDetailBlogByLink } from "../repositories/blog";
import { getDetailTag } from "../repositories/tag";
import { InternalServerError, NotFound, Ok } from "../types/status";

export const getDetailBlogByLinkService = async (
    { link }: { link: string }
): Promise<Ok<BlogDetailLinkType> | NotFound<NotFoundType> | InternalServerError<InternalServerErrorType>> => {
    try {
        // get detail blog from db
        let blogs = readBlog();
        let tags = readTag();
        let blog = getDetailBlogByLink({ blogs, link });

        // format json response
        if (blog === null) {
            return { status: 404, json: { message: "blog not found" } } satisfies NotFound<NotFoundType>
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
            body: marked.parse(readBlogMd(blog.link), { mangle: false, headerIds: false }),
        } satisfies BlogDetailLinkType;
        return { status: 200, json: detail_blog } satisfies Ok<BlogDetailLinkType>;
    } catch (err) {
        return { status: 500, json: { error: err } } satisfies InternalServerError<InternalServerErrorType>
    }
}
