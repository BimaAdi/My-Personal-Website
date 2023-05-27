import { z } from "zod";

export const BlogStringSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    created_at: z.date(),
  })
);

export type BlogStringType = z.infer<typeof BlogStringSchema>;

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

export const TagDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type TagDetailType = z.infer<typeof TagDetailSchema>;

export const TagJsonSchema = z.array(TagDetailSchema);

export type TagJsonType = z.infer<typeof TagJsonSchema>;
