import s from './MovieActions.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '@/entities/movie';

import { ROUTES } from '@/shared/routes';
import { Button, Icon, Loader } from '@/shared/ui';
import { useFavoritesControl } from '@/features/favorites';

type MovieActionsProps = {
  movie: MovieModel;
  onRandomRefetchButtonClick?: () => void;
  onTrailerButtonClick: () => void;
};

export function MovieActions({
  movie,
  onRandomRefetchButtonClick,
  onTrailerButtonClick,
}: MovieActionsProps) {
  const {
    isFavorite,
    addToFavorites,
    deleteFromFavorites,
    isError,
    isFetching,
  } = useFavoritesControl({ id: movie.id });

  const handleFavoriteButtonClick = () =>
    isFavorite ? deleteFromFavorites(movie.id) : addToFavorites(movie.id);

  return (
    <div className={s.movieActions}>
      {(movie.trailerUrl || movie.trailerYouTubeId) && (
        <Button
          className={s.movieActions__trailerButton}
          onClick={onTrailerButtonClick}
        >
          Трейлер
        </Button>
      )}
      {onRandomRefetchButtonClick && (
        <Button
          to={ROUTES.movie(movie.id, movie.title)}
          variant="secondary"
          className={s.movieActions__aboutButton}
        >
          О фильме
        </Button>
      )}
      <Button
        className={clsx(
          s.movieActions__favoriteButton,
          isFavorite && s.movieActions__favoriteButton_added,
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
          className={s.movieActions__randomButton}
        >
          <Icon.Refresh />
        </Button>
      )}
    </div>
  );
}
