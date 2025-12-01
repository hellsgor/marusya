import s from './MovieCard.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../model/types';

import { Link } from 'react-router';
import { memo } from 'react';

import { ROUTES } from '@/shared/routes';

import { Poster } from '@/shared/ui/poster';
import { Card } from '@/shared/ui/card';

type MovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'> & {
  ratingPlace?: number;
  className?: string;
};

export const MovieCard = memo(function MovieCard({
  ratingPlace,
  id,
  posterUrl,
  title,
  className,
}: MovieCardProps) {
  return (
    <div className={clsx(s.movieCard, className)}>
      {ratingPlace && typeof ratingPlace === 'number' && (
        <span className={s.movieCard__rating}>{ratingPlace}</span>
      )}
      <Card smaller>
        <Link to={ROUTES.movie(id, title)}>
          <Poster src={posterUrl ?? undefined} alt={`${title} movie poster`} />
        </Link>
      </Card>
    </div>
  );
});
