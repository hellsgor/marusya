import s from './Favorites.module.scss';

import { MovieList, MovieSlider } from '@/entities/movie';
import { useGetFavoritesQuery } from '@/features/favorites';
import { useMediaQuery } from '@/shared/lib';
import { Button, ErrorText, Loader } from '@/shared/ui';
import { FavoriteMovieCard } from '../favorite-movie-card';
import { ROUTES } from '@/shared/routes';

export function Favorites() {
  const isMobile = useMediaQuery('md');
  const { data, isLoading, isError } = useGetFavoritesQuery();

  if (isLoading) return <Loader size="big" fixed />;

  if (isError || !data) return <ErrorText errorCode="e001" />;

  if (!data.length)
    return (
      <div className={s.favorites_empty}>
        <ErrorText errorCode="e013" />
        <Button variant="primary" to={ROUTES.genres}>
          Перейти в жанры
        </Button>
      </div>
    );

  return isMobile ? (
    <MovieSlider items={data} CardComponent={FavoriteMovieCard} />
  ) : (
    <MovieList items={data} CardComponent={FavoriteMovieCard} />
  );
}
