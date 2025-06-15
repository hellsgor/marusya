import { useParams } from 'react-router';
import { Section } from '../ui/Section/Section';
import { getTitle } from '../helpers';
import { GENRES_RU } from '../constants';
import { BackTitleBar } from '../ui/BackTitleBar/BackTitleBar';
import { Button } from '../ui/Button/Button';
import { useMovies } from '../hooks/useMovies';
import { MoviesList } from '../ui/MoviesList/MoviesList';
import { Loader } from '../ui/Loader/Loader';
import { ErrorText } from '../ui/ErrorText/ErrorText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useRef } from 'react';

export function Genre() {
  const showMoreRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const { genreName } = useParams();
  const {
    movies,
    query: {
      fetchNextPage,
      hasNextPage,
      isError,
      isFetchNextPageError,
      isFetching,
    },
  } = useMovies(genreName);

  useIntersectionObserver(showMoreRef, isFetching, fetchNextPage);

  return (
    <Section indentsClasses="pt-64 pb-160 pt-md-16 pb-md-40">
      <BackTitleBar
        headingNode={
          <h1 className="heading heading_1">
            {getTitle(genreName ?? '', GENRES_RU)}
          </h1>
        }
      />

      {isError ? (
        <ErrorText errorKey={'e001'} />
      ) : movies.length && !isError ? (
        <MoviesList data={movies} />
      ) : (
        <Loader size="big" />
      )}

      {isFetchNextPageError && <ErrorText errorKey={'e002'} />}

      <Button
        variant="primary"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
        style={{ margin: '0 auto' }}
        ref={showMoreRef}
      >
        {isFetching ? <Loader size="small" /> : 'Показать ещё'}
      </Button>
      <div
        ref={showMoreRef}
        style={{ width: '100%', height: '2px', backgroundColor: 'transparent' }}
      ></div>
    </Section>
  );
}
