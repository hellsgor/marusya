import type { MoviesModel } from '@/entities/movie/model/types';

export function sortMoviesByRating(arr: MoviesModel) {
  return arr.toSorted((a, b) => b.tmdbRating - a.tmdbRating);
}
