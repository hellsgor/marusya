import { useQuery } from '@tanstack/react-query';
import type { MovieModel } from '../../models';
import { moviesService } from '../../api/moviesService';
import { MoviesList } from '../../ui/MoviesList/MoviesList';
import { ErrorText } from '../../ui/ErrorText/ErrorText';
import { Loader } from '../../ui/Loader/Loader';

export function Top10() {
  const { data, isPending, isError } = useQuery<MovieModel[] | undefined>({
    queryKey: ['movies', 'top10'],
    queryFn: moviesService.getTop10,
    staleTime: Infinity,
  });

  if (isPending) {
    return <Loader />;
  }

  if (!data || !data.length || isError) {
    return <ErrorText errorKey={'e001'} />;
  }

  return <MoviesList data={data} isIndexes={true} isSlider={true} />;
}
