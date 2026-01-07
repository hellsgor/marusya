import { MovieSchema } from '@/entities/movie';
import { z } from 'zod/v4';

export const addToFavoritesDTOSchema = z.object({
  result: z.boolean(),
});
export type AddToFavoritesDTOType = z.infer<typeof addToFavoritesDTOSchema>;

export const addToFavoritesDataSchema = MovieSchema.pick({ id: true });
export type AddToFavoritesDataType = z.infer<typeof addToFavoritesDataSchema>;

export const deleteFromFavoritesDTOSchema = z.object({
  result: z.boolean(),
});
export type DeleteFromFavoritesDTOType = z.infer<
  typeof addToFavoritesDTOSchema
>;

export const deleteFromFavoritesDataSchema = MovieSchema.pick({ id: true });
export type DeleteFromFavoritesDataType = z.infer<
  typeof addToFavoritesDataSchema
>;
