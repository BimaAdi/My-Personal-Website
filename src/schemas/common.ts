import { z } from "zod";

export const UnprocessableEntitySchema = z.object({
  message: z.any(),
});

export type UnprocessableEntityType = z.infer<typeof UnprocessableEntitySchema>;

export const InternalServerErrorSchema = z.object({
  error: z.any(),
});

export type InternalServerErrorType = z.infer<typeof InternalServerErrorSchema>;
