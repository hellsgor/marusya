import { z } from 'zod/v4';

export const UserSchema = z.object({
  email: z.email(),
  password: z.string(),
  name: z.string(),
  surname: z.string(),
});
export type UserModel = z.infer<typeof UserSchema>;

export const LoginSchema = UserSchema.pick({ email: true, password: true });
export type LoginModel = z.infer<typeof LoginSchema>;

export const SuccessLoginSchema = z.object({
  result: z.boolean(),
});
export type SuccessLoginModel = z.infer<typeof SuccessLoginSchema>;

export const SuccessCreateSchema = z.object({
  success: z.boolean(),
});
export type SuccessCreateModel = z.infer<typeof SuccessCreateSchema>;
