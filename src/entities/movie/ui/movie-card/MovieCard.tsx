import s from './MovieCard.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../model/types';

import { Link } from 'react-router';
import { memo } from 'react';

import { ROUTES } from '@/shared/routes';

import { Poster } from '@/shared/ui/poster';
import { Card } from '@/shared/ui/card';
import { ButtonClosed, Loader } from '@/shared/ui';

type BaseMovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'> & {
  className?: string;
};

type MovieCardProps = BaseMovieCardProps &
  (
    | {
        ratingPlace?: number;
        onDelete?: never;
        isDeleting?: never;
      }
    | {
        ratingPlace?: never;
        onDelete?: () => void;
        isDeleting?: boolean;
      }
  );

export const MovieCard = memo(function MovieCard({
  ratingPlace,
  id,
  posterUrl,
  title,
  className,
  onDelete,
  isDeleting,
}: MovieCardProps) {
  return (
    <div className={clsx(s.movieCard, className)}>
      {ratingPlace && typeof ratingPlace === 'number' && (
        <span className={s.movieCard__rating}>{ratingPlace}</span>
      )}
      {onDelete && (
        <ButtonClosed
          className={s.movieCard__deleteButton}
          onClick={onDelete}
          disabled={isDeleting}
        />
      )}
      <Card smaller>
        <Link to={ROUTES.movie(id, title)}>
          <Poster src={posterUrl ?? undefined} alt={`${title} movie poster`} />
        </Link>
        {isDeleting && (
          <>
            <div className={s.movieCard__filter}></div>
            <Loader className={s.movieCard__loader} />
          </>
        )}
      </Card>
    </div>
  );
});
