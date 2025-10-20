import * as S from './GenrePage.styled';
import { useParams } from 'react-router';
import { GENRES_RU } from '@/entities/genre/config/genresRu';
import { BackTitleBar, Section } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/lib';
import { GenreMoviesList } from '../GenreMoviesList/GenreMoviesList';

export function GenrePage() {
  const { genre } = useParams();

  return (
    <Section indents={'160px'}>
      <S.StyledWrapper>
        <BackTitleBar>
          <h1>{capitalizeFirstLetter(GENRES_RU[genre ?? ''])}</h1>
        </BackTitleBar>
        <GenreMoviesList />
      </S.StyledWrapper>
    </Section>
  );
}
