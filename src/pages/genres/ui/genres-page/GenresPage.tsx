import * as S from './GenresPage.styled';
import { Loader, PageError, Section } from '@/shared/ui';
import { GenreCard, useGetGenresQuery } from '@/entities/genre';

export function GenresPage() {
  const { data, isLoading, isError } = useGetGenresQuery();

  return (
    <Section indents={'160px'}>
      <h1>Жанры фильмов</h1>
      {isLoading && <Loader size="big" />}
      {isError && !data && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}
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
