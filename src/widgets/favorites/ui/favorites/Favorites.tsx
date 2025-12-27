import s from './Favorites.module.scss';

import { MoviesList, MoviesSlider } from '@/entities/movie';
import { useGetFavoritesQuery } from '@/features/favorites';
import { useMediaQuery } from '@/shared/lib';
import { ROUTES } from '@/shared/routes';
import { Button, ErrorText, Loader } from '@/shared/ui';
import { FavoriteMovieCard } from '../favorite-movie-card';

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
    <MoviesSlider items={data} CardComponent={FavoriteMovieCard} />
  ) : (
    <MoviesList items={data} CardComponent={FavoriteMovieCard} />
  );
}
