import { MoviesSchema } from '@/entities/movie';
import type { MoviesModel } from '@/entities/movie/model/types';
import { z } from 'zod/v4';

export const SearchSchema = z.object({
  count: z.number(),
  title: z.string(),
});
export type SearchType = z.infer<typeof SearchSchema>;

export const SearchDTOSchema = MoviesSchema;
export type SearchDTOType = MoviesModel;
