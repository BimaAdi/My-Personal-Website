import {
	PaginateBlogType,
	PaginateBlogSchema,
	BlogDetailType,
	BlogDetailSchema,
	QueryParamsBlogType,
} from "@/shared/schemas/blog";
import {
	InternalServerErrorType,
	InternalServerErrorSchema,
	UnprocessableEntityType,
	UnprocessableEntitySchema,
	NotFoundType,
	NotFoundSchema,
} from "@/shared/schemas/common";
import {
	InternalServerError,
	NotFound,
	Ok,
	UnprocessableEntity,
} from "./status";

export const GetPaginateBlog = async ({
	page,
	page_size,
	search,
}: QueryParamsBlogType): Promise<
	| Ok<PaginateBlogType>
	| UnprocessableEntity<UnprocessableEntityType>
	| InternalServerError<InternalServerErrorType>
> => {
	let url = `/api/blog?page=${page}&page_size=${page_size}`;
	if (search !== null) {
		url = `${url}&search=${search}`;
	}

	let response = await fetch(url, {
		method: "GET",
	});
	let json = await response.json();

	switch (response.status) {
		case 200:
			json = PaginateBlogSchema.parse(json);
			return {
				status: 200,
				json,
				response,
			};
		case 422:
			json = UnprocessableEntitySchema.parse(json);
			return {
				status: 422,
				json,
				response,
			};
		case 500:
			json = InternalServerErrorSchema.parse(json);
			return {
				status: 500,
				json,
				response,
			};
		default:
			return {
				status: 500,
				json: {
					error: "unhandle status code",
				},
				response,
			};
	}
};

export const GetDetailBlogByLink = async ({
	link,
}: { link: string }): Promise<
	| Ok<BlogDetailType>
	| NotFound<NotFoundType>
	| InternalServerError<InternalServerErrorType>
> => {
	let response = await fetch(`http://localhost:3000/api/blog/link/${link}`, {
		method: "GET",
	});
	let json = await response.json();
	switch (response.status) {
		case 200:
			json = BlogDetailSchema.parse(json);
			return {
				status: 200,
				json,
				response,
			};
		case 404:
			json = NotFoundSchema.parse(json);
			return {
				status: 404,
				json,
				response,
			};
		case 500:
			json = InternalServerErrorSchema.parse(json);
			return {
				status: 500,
				json,
				response,
			};
		default:
			return {
				status: 500,
				json: {
					error: "unhandle status code",
				},
				response,
			};
	}
};
