import { z } from 'zod/v4';

export const SignInResultSchema = z.object({
  result: z.boolean(),
});

export type SignInResultType = z.infer<typeof SignInResultSchema>;
