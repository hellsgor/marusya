import { z } from 'zod/v4';

export const SignUpResultSchema = z.union([
  z.object({
    result: z.boolean().parse(true),
  }),
  z.object({ error: z.string() }),
]);

export type SignUpResultType = z.infer<typeof SignUpResultSchema>;
