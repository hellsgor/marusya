import { z } from 'zod/v4';
import type { GENRES_RU } from '../config/genresRu';

export const GenreDTOSchema = z.string();
export const GenresDTOSchema = z.array(GenreDTOSchema);

export type GenreDTO = z.infer<typeof GenreDTOSchema>;
export type GenresDTO = z.infer<typeof GenresDTOSchema>;

export interface Genre {
  genreEn: GenreDTO;
  genreRu: (typeof GENRES_RU)[keyof typeof GENRES_RU];
}
export type Genres = Genre[];
