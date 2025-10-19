import { z } from 'zod/v4';
import type { GENRES_RU } from '../config/genresRu';

const GenreDTOSchema = z.string();
export const GenresDTOSchema = z.array(GenreDTOSchema);

type GenreDTO = z.infer<typeof GenreDTOSchema>;

export interface Genre {
  genreEn: GenreDTO;
  genreRu: (typeof GENRES_RU)[keyof typeof GENRES_RU];
}
export type Genres = Genre[];
