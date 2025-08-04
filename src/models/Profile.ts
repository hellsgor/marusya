import { z } from 'zod/v4';
import { UserSchema } from './User';

export const ProfileSchema = UserSchema.omit({ password: true }).extend({
  favorites: z.array(z.string()),
});

export type ProfileModel = z.infer<typeof ProfileSchema>;
