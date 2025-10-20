import * as S from './GenreMoviesList.styled';
import { useGetByGenreQuery } from '@/entities/movie';
import { useState } from 'react';
import { useParams } from 'react-router';
import { sortMoviesByRating } from '../../lib/sortMoviesByRating';
import { MOVIES_PER_PAGE } from '../../config/constants';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { ErrorText, Loader } from '@/shared/ui';
import { MovieCard } from '@/entities/movie';

export function GenreMoviesList() {
  const [page, setPage] = useState(1);

  const { genre } = useParams();
  const { data, isLoading, isFetching, isError } = useGetByGenreQuery(
    genre
      ? { genre, page, sortFunc: sortMoviesByRating, count: MOVIES_PER_PAGE }
      : skipToken,
  );

  const handleShowMoreButtonClick = () => {
    setPage((state) => ++state);
  };

  return (
    <>
      {isLoading && <Loader size="big" />}
      {isError && !data && <ErrorText errorCode="e001" />}
      <S.StyledGenreMoviesList>
        {data &&
          data.map(({ id, posterUrl, title }) => (
            <MovieCard key={id} {...{ id, posterUrl, title }} />
          ))}
      </S.StyledGenreMoviesList>
      {data && (
        <S.StyledShowMoreButton
          onClick={handleShowMoreButtonClick}
          disabled={isFetching}
        >
          {isFetching ? <Loader size="small" /> : 'Показать ещё'}
        </S.StyledShowMoreButton>
      )}
    </>
  );
}
