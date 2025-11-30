import s from './MovieCard.module.scss';

import type { MovieModel } from '../../model/types';

import { Link } from 'react-router';
import { memo } from 'react';

import { Poster } from '@/shared/ui/poster';
import { ROUTES } from '@/shared/routes';
import { Card } from '@/shared/ui/card';

type MovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'> & {
  ratingPlace?: number;
};

export const MovieCard = memo(function MovieCard({
  ratingPlace,
  id,
  posterUrl,
  title,
}: MovieCardProps) {
  return (
    <div className={s.movieCard}>
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
