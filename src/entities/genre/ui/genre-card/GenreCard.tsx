import * as S from './GenreCard.styled';
import type { Genre } from '../../model/types';

import { Poster } from '@/shared/ui/poster';

import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

import { capitalizeFirstLetter } from '@/shared/lib';

type GenreCardProps = {
  genre: Genre;
  imageSrc?: string;
};

export function GenreCard({ genre, imageSrc }: GenreCardProps) {
  return (
    <Link to={ROUTES.genre(genre.genreEn)}>
      <S.StyledGenreCard $radius={'big'}>
        <Poster src={imageSrc} alt={genre.genreRu} />
        <S.StyledTitle>{capitalizeFirstLetter(genre.genreRu)}</S.StyledTitle>
      </S.StyledGenreCard>
    </Link>
  );
}
