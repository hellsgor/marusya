import * as S from './GenresPage.styled';
import { Section } from '@/shared/ui';
import { GenreCard } from '../genre-card/GenreCard';
import { useGetGenresQuery } from '../../api/genreApi';

export function GenresPage() {
  const { data } = useGetGenresQuery();

  return (
    <Section indents={'160px'}>
      <h1>Жанры фильмов</h1>
      <S.StyledGenresWrapper>
        {data?.map((genre) => <GenreCard genre={genre} key={genre.genreEn} />)}
      </S.StyledGenresWrapper>
    </Section>
  );
}
