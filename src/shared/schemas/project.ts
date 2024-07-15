import { z } from "zod";

// /api/project?page=1&page_size=10
export const QueryParamsProjectsSchema = z.object({
	page: z.number().positive(),
	page_size: z.number().positive().lte(30),
});

export type QueryParamsProjectsType = z.infer<typeof QueryParamsProjectsSchema>;

export const PaginateProjectsSchema = z.object({
	counts: z.number(),
	page_count: z.number(),
	page: z.number(),
	page_size: z.number(),
	results: z.array(
		z.object({
			id: z.string(),
			project_name: z.string(),
			description: z.string(),
			repo_link: z.string().nullable(),
			website_link: z.string().nullable(),
			tech_stack: z.array(
				z
					.object({
						id: z.string(),
						name: z.string(),
					})
					.nullable(),
			),
			created_at: z.string(),
		}),
	),
});

export type PaginateProjectsType = z.infer<typeof PaginateProjectsSchema>;
