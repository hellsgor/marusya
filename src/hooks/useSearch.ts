import { useQuery } from '@tanstack/react-query';
import { moviesService } from '../api/moviesService';
import { MAX_SEARCH_DATA_LENGTH } from '../constants/maxSearchDataLength';

export function useSearch(value: string | undefined) {
  const searchQuery = useQuery({
    queryKey: ['search', value],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!value?.trim().length,
    queryFn: () =>
      moviesService.getMovies({ title: value?.trim().toLowerCase() }),
    select: (data) => data.slice(0, MAX_SEARCH_DATA_LENGTH),
  });

  return searchQuery;
}
