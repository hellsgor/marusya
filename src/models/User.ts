import { boolean, z } from 'zod/v4';

export const UserSchema = z.object({
  email: z.email(),
  password: z.string(),
  name: z.string(),
  surname: z.string(),
});

export const LoginSchema = UserSchema.pick({ email: true, password: true });
export const SuccessLoginSchema = z.object({
  result: boolean,
});

export type UserModel = z.infer<typeof UserSchema>;
export type LoginModel = z.infer<typeof LoginSchema>;
export type SuccessLoginModel = z.infer<typeof SuccessLoginSchema>;
