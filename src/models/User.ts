import { z } from 'zod/v4';

export const UserSchema = z.object({
  email: z.email(),
  password: z.string(),
  name: z.string(),
  surname: z.string(),
});

export const LoginSchema = UserSchema.pick({ email: true, password: true });
export const SuccessSchema = z.object({
  result: z.boolean(),
});

export type UserModel = z.infer<typeof UserSchema>;
export type LoginModel = z.infer<typeof LoginSchema>;
export type SuccessModel = z.infer<typeof SuccessSchema>;
