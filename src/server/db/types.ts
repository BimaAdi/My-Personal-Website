import { z } from "zod";

export const BlogStringSchema = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
		link: z.string(),
		tags: z.array(z.string()),
		created_at: z.date(),
	}),
);

export type BlogStringType = z.infer<typeof BlogStringSchema>;
