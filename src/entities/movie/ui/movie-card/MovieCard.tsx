import * as S from './MovieCard.styled';

import { Link } from 'react-router';
import type { MovieModel } from '../../model/types';
import { Poster } from '@/shared/ui/poster';
import { memo } from 'react';
import { ROUTES } from '@/shared/routes';

type MovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'>;

export const MovieCard = memo(function MovieCard({
  id,
  posterUrl,
  title,
}: MovieCardProps) {
  return (
    <S.StyledMovieCard $radius="small">
      <Link to={ROUTES.movie(id, title)} className="movie-wrapper">
        <Poster src={posterUrl ?? undefined} alt={`${title} movie poster`} />
      </Link>
    </S.StyledMovieCard>
  );
});
