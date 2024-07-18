import fs from "fs";
import { BlogJsonSchema } from "@/server/schemas/blog";
import { DEFAULT_JSON_PATH } from "@/constants";
import { BlogStringType } from "../db/types";

export const paginateBlog = ({
	page = 1,
	page_size = 10,
	search = null,
}: {
	page?: number | undefined;
	page_size?: number | undefined;
	search?: string | null | undefined;
}) => {
	// Conver JSON to array of object
	let data = fs.readFileSync(
		`${global.JSON_PATH || DEFAULT_JSON_PATH}blogs.json`,
	);
	let json = JSON.parse(data.toString()) as BlogStringType;
	json = json.map((x) => {
		return { ...x, created_at: new Date(x.created_at) };
	});
	let blogs = BlogJsonSchema.parse(json);

	if (search !== null) {
		blogs = blogs.filter((x) =>
			x.title.toLowerCase().includes(search.toLowerCase()),
		);
	}

	// Paginate and search blog
	let num_blog = blogs.length;
	let start = (page - 1) * page_size;
	if (start > num_blog) {
		return {
			data: [],
			num_data: 0,
			num_page: 0,
		};
	}
	let end = start + page_size;
	if (end > num_blog) {
		end = num_blog;
	}
	return {
		data: blogs.slice(start, end),
		num_data: num_blog,
		num_page: Math.ceil(num_blog / page_size),
	};
};
