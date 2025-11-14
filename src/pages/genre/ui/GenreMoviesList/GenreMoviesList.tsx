import * as S from './GenreMoviesList.styled';
import { useGetByGenreQuery } from '@/entities/movie';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { sortMoviesByRating, useInfiniteLoading } from '../../lib';
import { MOVIES_PER_PAGE } from '../../config/constants';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { Loader, PageError } from '@/shared/ui';
import { MovieCard } from '@/entities/movie';

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
    <>
      {isLoading && <Loader size="big" />}
      {isError && !data && (
        <PageError errorCode="e002" backdropText="Ooops!"></PageError>
      )}
      <S.StyledGenreMoviesList>
        {data &&
          data.map(({ id, posterUrl, title }) => (
            <MovieCard key={id} {...{ id, posterUrl, title }} />
          ))}
      </S.StyledGenreMoviesList>
      {data && (
        <S.StyledShowMoreButton
          ref={showMoreButtonRef}
          onClick={handleShowMoreButtonClick}
          disabled={isFetching}
        >
          {isFetching ? <Loader size="small" /> : 'Показать ещё'}
        </S.StyledShowMoreButton>
      )}
    </>
  );
}
