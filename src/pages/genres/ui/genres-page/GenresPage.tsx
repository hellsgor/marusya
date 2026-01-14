import s from './GenresPage.module.scss';

import { Loader, PageError, Section } from '@/shared/ui';
import { GenreCard, useGetGenresQuery } from '@/entities/genre';
import { useDocumentTitle, useMediaQuery } from '@/shared/lib';

export function GenresPage() {
  const mq = useMediaQuery('md');
  const { data, isLoading, isError } = useGetGenresQuery();

  useDocumentTitle('Жанры');

  return (
    <Section
      indents={[mq ? '24px' : '32px', mq ? '40px' : '160px']}
      className={s.genresPage}
    >
      <h1>Жанры фильмов</h1>
      {isLoading && <Loader size="big" fixed />}
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
