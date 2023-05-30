import { PaginateBlogType, PaginateBlogSchema, QueryParamsBlogType } from "@/shared/schemas/blog";
import { InternalServerError, Ok, UnprocessableEntity } from "./status";
import { InternalServerErrorType, InternalServerErrorSchema, UnprocessableEntityType, UnprocessableEntitySchema } from "@/shared/schemas/common";

export const GetPaginateBlog = async ({ page, page_size }: QueryParamsBlogType): Promise<
    Ok<PaginateBlogType> |
    UnprocessableEntity<UnprocessableEntityType> |
    InternalServerError<InternalServerErrorType>
> => {
    let response = await fetch(`/api/blog?page=${page}&page_size=${page_size}`, {
        method: 'GET',
    })
    let json = await response.json()
    switch (response.status) {
        case 200:
            json = PaginateBlogSchema.parse(json)
            return {
                status: 200,
                json,
                response
            };
        case 422:
            json = UnprocessableEntitySchema.parse(json)
            return {
                status: 422,
                json,
                response
            };
        case 500:
            json = InternalServerErrorSchema.parse(json)
            return {
                status: 500,
                json,
                response
            };
        default:
            return {
                status: 500,
                json: {
                    error: "unhandle status code"
                },
                response
            }
    }
}
