import { useQuery } from '@tanstack/react-query';
import type { MovieModel } from '../models';
import { moviesService } from '../api/moviesService';

export function useMovie(id: MovieModel['id']) {
  const movieQuery = useQuery({
    queryKey: ['movies', `${id}`],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
    queryFn: () => moviesService.getMovie(id),
  });

  return movieQuery;
}
