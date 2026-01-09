import type { MoviesModel } from './types';

export type getByGenreArgs = {
  genre: string;
  page: number;
  count: number;
  sortFunc: (movies: MoviesModel) => MoviesModel;
};
