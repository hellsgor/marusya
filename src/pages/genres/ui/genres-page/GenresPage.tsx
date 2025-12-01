import s from './GenrePage.module.scss';
import { Loader, PageError, Section } from '@/shared/ui';
import { GenreCard, useGetGenresQuery } from '@/entities/genre';

export function GenresPage() {
  const { data, isLoading, isError } = useGetGenresQuery();

  return (
    <Section indents={['0', '160px']} className={s.genresPage}>
      <h1>Жанры фильмов</h1>
      {isLoading && <Loader size="big" />}
      {isError && !data && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}
      {data && (
        <ul role="list" className={s.genresPage__list}>
          {data?.map((genre) => (
            <li className={s.genresPage__item} key={genre.genreEn}>
              <GenreCard genre={genre} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
