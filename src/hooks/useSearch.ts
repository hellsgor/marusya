import { useQuery } from '@tanstack/react-query';
import { moviesService } from '../api/moviesService';

export function useSearch(value: string | undefined) {
  const searchQuery = useQuery({
    queryKey: ['search', value],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!value?.trim().length,
    queryFn: () => moviesService.getMovies({ title: value?.trim() }),
  });

  return searchQuery;
}
