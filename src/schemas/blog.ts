import { z } from "zod";

export const BlogDetailSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  tag: z.array(
    z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .optional()
  ),
  created_at: z.string(),
  body: z.string(),
});

export type BlogDetailType = z.infer<typeof BlogDetailSchema>;

export const QueryParamsBlogSchema = z.object({
  page: z.number().positive(),
  page_size: z.number().positive().lte(30),
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
      tag: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      ),
      created_at: z.string(),
    })
  ),
});

export type PaginateBlogType = z.infer<typeof PaginateBlogSchema>;
