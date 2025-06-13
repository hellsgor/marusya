import type { MovieModel } from './Movie';

export interface GenreModel {
  name: string;
  nameRu: string | undefined;
  image: MovieModel['backdropUrl'];
}
