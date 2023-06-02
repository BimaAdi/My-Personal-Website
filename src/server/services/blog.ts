import { BlogDetailLinkType, BlogDetailType, PaginateBlogType, QueryParamsBlogSchema } from "@/shared/schemas/blog";
import { NotFoundType, InternalServerErrorType, UnprocessableEntityType } from "@/shared/schemas/common";
import dayjs from "dayjs";
import { marked } from "marked";
import { readBlog, readTag, readBlogMd } from "../db/query";
import { getDetailBlog, getDetailBlogByLink, paginateBlog } from "../repositories/blog";
import { getDetailTag } from "../repositories/tag";
import { InternalServerError, NotFound, Ok } from "../types/status";
import { UnprocessableEntity } from "../types/status";

export const getPaginateBlogService = async (
    { page, page_size, search }: { page: number, page_size: number, search: string | null }
): Promise<Ok<PaginateBlogType> | UnprocessableEntity<UnprocessableEntityType> | InternalServerError<InternalServerErrorType>> => {
    try {
        // parse and validate query param
        let validateQueryParam = QueryParamsBlogSchema.safeParse({
            page,
            page_size,
            search,
        });
        if (validateQueryParam.success === false) {
            return {
                status: 422,
                json: {
                    message: validateQueryParam.error
                }
            } satisfies UnprocessableEntity<UnprocessableEntityType>;
        }

        // read from "db" ;)
        let blogs = readBlog();
        let tags = readTag();
        let { data, num_data, num_page } = paginateBlog({
            blogs,
            page,
            page_size,
            search,
        });

        // format json response
        let responseOk = {
            counts: num_data,
            page_count: num_page,
            page,
            page_size,
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
        return { status: 200, json: responseOk };
    } catch (err) {
        return { status: 500, json: { error: err } } satisfies InternalServerError<InternalServerErrorType>
    }
}

export const getDetailBlogService = async (
    { id }: { id: string }
): Promise<Ok<BlogDetailType> | NotFound<NotFoundType> | InternalServerError<InternalServerErrorType>> => {
    try {
        // get detail blog from db
        let blogs = readBlog();
        let tags = readTag();
        let blog = getDetailBlog({ blogs, id });

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
        } satisfies BlogDetailType;

        return { status: 200, json: detail_blog } satisfies Ok<BlogDetailType>;
    } catch (err) {
        return { status: 500, json: { error: err } } satisfies InternalServerError<InternalServerErrorType>
    }
}

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
