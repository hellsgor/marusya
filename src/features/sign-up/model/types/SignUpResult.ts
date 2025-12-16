import { z } from 'zod/v4';

export const SignUpResultSchema = z.object({
  success: z.boolean(),
});

export type SignUpResultType = z.infer<typeof SignUpResultSchema>;
