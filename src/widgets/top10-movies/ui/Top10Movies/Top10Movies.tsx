import { Loader, PageError, Section } from '@/shared/ui';
import s from './Top10Movies.module.scss';
import { useMediaQuery } from '@/shared/lib';
import { MovieList, MovieSlider, useGetTop10Query } from '@/entities/movie';

export function Top10Movies() {
  const mq = useMediaQuery('md');
  const { data: movies, isFetching, isError } = useGetTop10Query();

  return (
    <Section
      indents={!mq ? ['40px', '120px'] : '32px'}
      className={s.top10Movies}
    >
      <h2>Топ 10 фильмов</h2>
      {isFetching && <Loader size="big" fixed />}
      {isError && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}
      {!isFetching &&
        !isError &&
        movies &&
        (!mq ? (
          <MovieList items={movies} withRatingPlace />
        ) : (
          <MovieSlider items={movies} withRatingPlace />
        ))}
    </Section>
  );
}
