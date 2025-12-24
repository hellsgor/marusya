import { MovieList, MovieSlider } from '@/entities/movie';
import { useGetFavoritesQuery } from '@/features/favorites';
import { useMediaQuery } from '@/shared/lib';
import { ErrorText, Loader } from '@/shared/ui';
import { FavoriteMovieCard } from '../favorite-movie-card';

export function Favorites() {
  const isMobile = useMediaQuery('md');
  const { data, isLoading, isError } = useGetFavoritesQuery();

  if (isLoading) return <Loader size="big" fixed />;

  if (isError || !data) return <ErrorText errorCode="e001" />;

  if (!data.length) return <ErrorText errorCode="e013" />;

  return isMobile ? (
    <MovieSlider items={data} CardComponent={FavoriteMovieCard} />
  ) : (
    <MovieList items={data} CardComponent={FavoriteMovieCard} />
  );
}
