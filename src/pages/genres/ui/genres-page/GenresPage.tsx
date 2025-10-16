import * as S from './GenresPage.styled';
import { ErrorText, Loader, Section } from '@/shared/ui';
import { GenreCard } from '../genre-card/GenreCard';
import { useGetGenresQuery } from '../../api/genreApi';

export function GenresPage() {
  const { data, isLoading, isError } = useGetGenresQuery();

  return (
    <Section indents={'160px'}>
      <h1>Жанры фильмов</h1>
      {isLoading && <Loader size="big" />}
      {isError && !data && <ErrorText errorCode="e001" />}
      {data && (
        <S.StyledGenresWrapper>
          {data?.map((genre) => (
            <GenreCard genre={genre} key={genre.genreEn} />
          ))}
        </S.StyledGenresWrapper>
      )}
    </Section>
  );
}
