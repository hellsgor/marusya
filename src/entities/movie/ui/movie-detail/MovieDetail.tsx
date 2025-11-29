import s from './MovieDetail.module.scss';
import clsx from 'clsx';

import type { MovieDetailProps } from './MovieDetail.types';

import { memo } from 'react';

import { Poster } from '@/shared/ui/poster';
import { Rating } from '../rating';
import { formatRuntime } from '../../lib/helpers/formatRuntime';
import { getRuGenreName } from '@/entities/genre/@x/movie';
import { Button, Icon, Spoiler } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';

export const MovieDetail = memo(function MovieDetail({
  movie,
  randomRefetch,
  onTrailerButtonClick,
}: MovieDetailProps) {
  if (!movie) return null;

  const isFavoriteMovie = false;

  return (
    <div className={s.movieDetail}>
      <div className={s.movieDetail__wrapper}>
        <div className={s.movieDetail__content}>
          <div className={s.movieDetail__meta}>
            <Rating rate={movie.tmdbRating ?? 0} />
            {[
              movie.releaseYear,
              ...movie.genres.map((genre) => getRuGenreName(genre)),
              formatRuntime(movie.runtime),
            ].map((item, idx) => (
              <span className={s.movieDetail__metaItem} key={idx}>
                {item}
              </span>
            ))}
          </div>
          <h1>{movie.title}</h1>
          <Spoiler max={4}>
            <p className={s.movieDetail__description}>{movie.plot}</p>
          </Spoiler>
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
          {randomRefetch && (
            <Button
              to={ROUTES.movie(movie.id, movie.title)}
              variant="secondary"
            >
              О фильме
            </Button>
          )}
          <Button
            className={clsx(
              s.movieDetail__favoriteButton,
              isFavoriteMovie && s.movieDetail__favoriteButton_added,
            )}
            variant="secondary"
            smallPaddings
          >
            <Icon.Heart />
          </Button>
          {randomRefetch && (
            <Button variant="secondary" smallPaddings onClick={randomRefetch}>
              <Icon.Refresh />
            </Button>
          )}
        </div>
      </div>

      <div className={s.movieDetail__posterWrapper}>
        <Poster
          src={movie?.backdropUrl || movie?.posterUrl || undefined}
          alt={`${movie?.title} poster`}
        />
      </div>
    </div>
  );
});
