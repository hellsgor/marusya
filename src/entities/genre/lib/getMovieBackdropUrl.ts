import type { MovieModel } from '@/entities/movie/@x/genre';

export function getMovieBackdropUrl(
  movies: MovieModel[],
): MovieModel['backdropUrl'] {
  if (movies.length === 0) return null;

  const sortedMovies = movies.toSorted((a, b) => b.tmdbRating - a.tmdbRating);

  for (const movie of sortedMovies) {
    if (movie.backdropUrl) return movie.backdropUrl;
  }

  return null;
}
