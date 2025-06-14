import type { GenreModel } from '../models';
import { useInfiniteQuery } from '@tanstack/react-query';
import { moviesService } from '../api/moviesService';
import { MOVIES_PER_PAGE } from '../constants';

export function useMovies(genreName: GenreModel['name'] | undefined) {
  const query = useInfiniteQuery({
    queryKey: ['movies', genreName],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
    queryFn: ({ pageParam = 1 }) =>
      moviesService.getMovies({
        genre: genreName,
        count: MOVIES_PER_PAGE,
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (last, all) =>
      last.length === MOVIES_PER_PAGE ? all.length + 1 : undefined,
  });

  const allMovies = query.data?.pages.flat() ?? [];
  const sorted = allMovies.toSorted((a, b) => b.tmdbRating - a.tmdbRating);

  return {
    movies: sorted,
    query,
  };
}
