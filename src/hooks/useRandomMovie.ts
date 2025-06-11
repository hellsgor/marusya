import type { MovieModel } from '../models/Movie';

import { useQuery } from '@tanstack/react-query';
import { moviesService } from '../api/moviesService';
import { queryClient } from '../api/queryClient';

export function useRandomMovie() {
  const qKeys = ['movies', 'random'];

  const randomQuery = useQuery<MovieModel | undefined>({
    queryKey: qKeys,
    queryFn: moviesService.getRandom,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const refresh = () => {
    queryClient.invalidateQueries({
      queryKey: qKeys,
    });
  };

  return { ...randomQuery, refresh };
}
