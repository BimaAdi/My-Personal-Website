import { z } from "zod";

export const ProjectJsonStringSchema = z.array(
  z.object({
    id: z.string(),
    project_name: z.string(),
    description: z.string(),
    repo_link: z.string().nullable(),
    website_link: z.string().nullable(),
    tech_stack: z.array(z.string()),
    created_at: z.date(),
  })
);

export type ProjectJsonStringType = z.infer<typeof ProjectJsonStringSchema>;

export const ProjectJsonSchema = z.array(
  z.object({
    id: z.string(),
    project_name: z.string(),
    description: z.string(),
    repo_link: z.string().nullable(),
    website_link: z.string().nullable(),
    tech_stack: z.array(z.string()),
    created_at: z.date(),
  })
);

export type ProjectJsonType = z.infer<typeof ProjectJsonSchema>;
