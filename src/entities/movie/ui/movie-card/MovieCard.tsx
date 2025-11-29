import s from './MovieCard.module.scss';

import type { MovieModel } from '../../model/types';

import { Link } from 'react-router';
import { memo } from 'react';

import { Poster } from '@/shared/ui/poster';
import { ROUTES } from '@/shared/routes';
import { Card } from '@/shared/ui/card';

type MovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'>;

export const MovieCard = memo(function MovieCard({
  id,
  posterUrl,
  title,
}: MovieCardProps) {
  return (
    <Card className={s.movieCard} smaller>
      <Link to={ROUTES.movie(id, title)} className={s.movieCard__wrapper}>
        <Poster src={posterUrl ?? undefined} alt={`${title} movie poster`} />
      </Link>
    </Card>
  );
});
