import { z } from "zod";

export const BlogDetailJsonSchema = z.object({
	id: z.string(),
	title: z.string(),
	link: z.string(),
	tags: z.array(z.string()),
	created_at: z.date(),
});

export type BlogDetailJsonType = z.infer<typeof BlogDetailJsonSchema>;

export const BlogJsonSchema = z.array(BlogDetailJsonSchema);

export type BlogJsonType = z.infer<typeof BlogJsonSchema>;
