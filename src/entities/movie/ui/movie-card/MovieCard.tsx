import * as S from './MovieCard.styled';

import { Link } from 'react-router';
import type { MovieModel } from '../../model/types';
import { Poster } from '@/shared/ui/poster';

type MovieCardProps = Pick<MovieModel, 'id' | 'posterUrl' | 'title'>;

export function MovieCard({ id, posterUrl, title }: MovieCardProps) {
  return (
    <S.StyledMovieCard $radius="small">
      <Link to={`${id}`} className="movie-wrapper">
        <Poster src={posterUrl ?? undefined} alt={`${title} movie poster`} />
      </Link>
    </S.StyledMovieCard>
  );
}
