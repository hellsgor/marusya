import { z } from 'zod/v4';

export const UserSchema = z.object({
  email: z.email(),
  password: z.string(),
  name: z.string(),
  surname: z.string(),
});

export type UserModel = z.infer<typeof UserSchema>;
