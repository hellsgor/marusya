import { useQuery } from '@tanstack/react-query';
import type { GenreModel } from '../models';
import { moviesService } from '../api/moviesService';
import { genresRu } from '../constants/genresRu';

export function useGenres() {
  const genresQuery = useQuery<GenreModel[] | undefined>({
    queryKey: ['movies', 'genres'],
    staleTime: 1000 * 60 * 60,
    queryFn: async () => {
      const genres = await moviesService.getGenres();

      return await Promise.all(
        (genres ?? []).map(async (genre) => {
          const [movie] = await moviesService.getGenreFirstMovie(genre);
          return {
            name: genre,
            nameRu: genresRu[genre] ?? undefined,
            image: movie?.backdropUrl ?? null,
          };
        }),
      );
    },
  });

  return genresQuery;
}
