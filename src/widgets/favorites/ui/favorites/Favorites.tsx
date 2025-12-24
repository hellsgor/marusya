import { MovieList, MovieSlider } from '@/entities/movie';
import { useGetFavoritesQuery } from '@/features/favorites';
import { useMediaQuery } from '@/shared/lib';
import { ErrorText, Loader } from '@/shared/ui';

export function Favorites() {
  const { data, isFetching, isError } = useGetFavoritesQuery();
  const isMobile = useMediaQuery('md');

  if (isFetching) return <Loader size="big" fixed />;

  if (isError || !data) return <ErrorText errorCode="e001" />;

  if (!data.length) return <ErrorText errorCode="e013" />;

  if (isMobile) return <MovieSlider items={data} />;

  return <MovieList items={data} />;
}
