import { z } from 'zod/v4';

export const SignInFormDataSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignInFormData = z.infer<typeof SignInFormDataSchema>;
