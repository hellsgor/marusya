import { z } from 'zod/v4';
import { UserSchema } from './User';
import { MovieSchema } from './Movie';

export const ProfileSchema = UserSchema.omit({ password: true }).extend({
  favorites: z.array(MovieSchema.shape.id),
});

export type ProfileModel = z.infer<typeof ProfileSchema>;
