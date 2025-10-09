import { Poster } from '@/shared/ui/poster';
import type { Genre } from '../../model/types';
import * as S from './GenreCard.styled';
import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

type GenreCardProps = {
  genre: Genre;
  imageSrc?: string;
};

export function GenreCard({ genre, imageSrc }: GenreCardProps) {
  return (
    <Link to={ROUTES.genre(genre.genreEn)}>
      <S.StyledGenreCard $radius={'big'}>
        <Poster src={imageSrc} alt={genre.genreRu} />
        <S.StyledTitle>
          {genre.genreRu.charAt(0).toUpperCase() + genre.genreRu.slice(1)}
        </S.StyledTitle>
      </S.StyledGenreCard>
    </Link>
  );
}
