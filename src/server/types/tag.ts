import { z } from "zod";

export const TagDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type TagDetailType = z.infer<typeof TagDetailSchema>;

export const TagJsonSchema = z.array(TagDetailSchema);

export type TagJsonType = z.infer<typeof TagJsonSchema>;
