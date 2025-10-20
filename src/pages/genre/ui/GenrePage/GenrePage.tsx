import * as S from './GenrePage.styled';
import { useParams } from 'react-router';
import { BackTitleBar, Section } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/lib';
import { GenreMoviesList } from '../GenreMoviesList/GenreMoviesList';
import { getRuGenreName } from '@/entities/genre';

export function GenrePage() {
  const { genre } = useParams();

  return (
    <Section indents={'160px'}>
      <S.StyledWrapper>
        <BackTitleBar>
          <h1>{genre ? capitalizeFirstLetter(getRuGenreName(genre)) : ''}</h1>
        </BackTitleBar>
        <GenreMoviesList />
      </S.StyledWrapper>
    </Section>
  );
}
