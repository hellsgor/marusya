import s from './GenreMoviesList.module.scss';

import { skipToken } from '@reduxjs/toolkit/query/react';

import { useRef, useState } from 'react';
import { useParams } from 'react-router';

import { MovieList, useGetByGenreQuery } from '@/entities/movie';
import { Button, Loader, PageError } from '@/shared/ui';
import { MOVIES_PER_PAGE } from '../../config/constants';
import { sortMoviesByRating, useInfiniteLoading } from '../../lib';

export function GenreMoviesList() {
  const [page, setPage] = useState(1);

  const { genre } = useParams();
  const { data, isLoading, isFetching, isError, isSuccess } =
    useGetByGenreQuery(
      genre
        ? { genre, page, sortFunc: sortMoviesByRating, count: MOVIES_PER_PAGE }
        : skipToken,
    );

  const showMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const handleShowMoreButtonClick = () => {
    setPage((state) => ++state);
  };
  useInfiniteLoading({
    showMoreButtonRef,
    handleShowMoreButtonClick,
    isLoading,
    isSuccess,
    page,
  });

  return (
    <div className={s.genreMovieList}>
      {isLoading && <Loader size="big" />}

      {isError && !data && (
        <PageError errorCode="e002" backdropText="Ooops!"></PageError>
      )}

      {data && (
        <>
          <MovieList items={data} className={s.genreMovieList__list} />
          <Button
            className={s.genreMovieList__button}
            ref={showMoreButtonRef}
            onClick={handleShowMoreButtonClick}
            disabled={isFetching}
          >
            {isFetching ? <Loader size="small" /> : 'Показать ещё'}
          </Button>
        </>
      )}
    </div>
  );
}
