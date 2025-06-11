import { useQuery } from '@tanstack/react-query';
import type { MovieModel } from '../../models/Movie';
import { moviesService } from '../../api/moviesService';
import { MoviesList } from '../../ui/MoviesList/MoviesList';

export function Top10() {
  const top10Query = useQuery<MovieModel[] | undefined>({
    queryKey: ['movies', 'top10'],
    queryFn: moviesService.getTop10,
    staleTime: Infinity,
  });

  return <MoviesList query={top10Query} isIndexes={true} isSlider={true} />;
}
