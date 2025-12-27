import s from './MovieDetail.module.scss';
import clsx from 'clsx';

import type { MovieDetailProps } from './MovieDetail.types';

import { memo } from 'react';

import { useFavoritesControl } from '@/features/favorites';
import { ROUTES } from '@/shared/routes';
import { Button, ErrorText, Icon, Loader, Poster } from '@/shared/ui';
import { MetaItemsRow } from '../meta-items-row';
import { MovieDescription } from '../movie-description';

export const MovieDetail = memo(function MovieDetail({
  movie,
  onRandomRefetchButtonClick,
  onTrailerButtonClick,
}: MovieDetailProps) {
  const {
    isFavorite,
    addToFavorites,
    deleteFromFavorites,
    isError,
    isFetching,
  } = useFavoritesControl({ id: movie.id });

  if (!movie) return <ErrorText errorCode="e001" />;

  const handleFavoriteButtonClick = () =>
    isFavorite ? deleteFromFavorites(movie.id) : addToFavorites(movie.id);

  return (
    <div className={s.movieDetail}>
      <div className={s.movieDetail__wrapper}>
        <div className={s.movieDetail__content}>
          <MetaItemsRow {...movie} />
          <h1>{movie.title}</h1>
          <MovieDescription text={movie.plot} />
        </div>
        <div className={s.movieDetail__actions}>
          {(movie.trailerUrl || movie.trailerYouTubeId) && (
            <Button
              className={s.movieDetail__trailerButton}
              onClick={onTrailerButtonClick}
            >
              Трейлер
            </Button>
          )}
          {onRandomRefetchButtonClick && (
            <Button
              to={ROUTES.movie(movie.id, movie.title)}
              variant="secondary"
              className={s.movieDetail__aboutButton}
            >
              О фильме
            </Button>
          )}
          <Button
            className={clsx(
              s.movieDetail__favoriteButton,
              isFavorite && s.movieDetail__favoriteButton_added,
            )}
            variant="secondary"
            smallPaddings
            disabled={isFetching}
            onClick={handleFavoriteButtonClick}
          >
            {isFetching || isError ? <Loader size="small" /> : <Icon.Heart />}
          </Button>
          {onRandomRefetchButtonClick && (
            <Button
              variant="secondary"
              smallPaddings
              onClick={onRandomRefetchButtonClick}
              className={s.movieDetail__randomButton}
            >
              <Icon.Refresh />
            </Button>
          )}
        </div>
      </div>

      <Poster
        className={s.movieDetail__poster}
        src={movie?.backdropUrl || movie?.posterUrl || undefined}
        alt={`${movie?.title} poster`}
      />
    </div>
  );
});
