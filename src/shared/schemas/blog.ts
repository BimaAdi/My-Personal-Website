import { z } from "zod";

// /api/blog/[id]
export const BlogDetailSchema = z.object({
	id: z.string(),
	title: z.string(),
	link: z.string(),
	tags: z.array(
		z.union([
			z.object({
				id: z.string(),
				name: z.string(),
			}),
			z.null(),
		]),
	),
	created_at: z.string(),
	body: z.string(),
});

export type BlogDetailType = z.infer<typeof BlogDetailSchema>;

// /api/blog/link/[id]
export const BlogDetailLinkSchema = z.object({
	id: z.string(),
	title: z.string(),
	link: z.string(),
	tags: z.array(
		z.union([
			z.object({
				id: z.string(),
				name: z.string(),
			}),
			z.null(),
		]),
	),
	created_at: z.string(),
	body: z.string(),
});

export type BlogDetailLinkType = z.infer<typeof BlogDetailLinkSchema>;

// /api/blog?page=1&page_size=10
export const QueryParamsBlogSchema = z.object({
	page: z.number().positive(),
	page_size: z.number().positive().lte(30),
	search: z.string().nullable(),
});

export type QueryParamsBlogType = z.infer<typeof QueryParamsBlogSchema>;

export const PaginateBlogSchema = z.object({
	counts: z.number(),
	page_count: z.number(),
	page: z.number(),
	page_size: z.number(),
	results: z.array(
		z.object({
			id: z.string(),
			title: z.string(),
			link: z.string(),
			tags: z.array(
				z.union([
					z.object({
						id: z.string(),
						name: z.string(),
					}),
					z.null(),
				]),
			),
			created_at: z.string(),
		}),
	),
});

export type PaginateBlogType = z.infer<typeof PaginateBlogSchema>;
