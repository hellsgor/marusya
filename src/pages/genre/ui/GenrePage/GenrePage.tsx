import * as S from './GenrePage.styled';

import { useGetByGenreQuery } from '@/entities/movie';
import { skipToken } from '@reduxjs/toolkit/query';

import { useState } from 'react';
import { useParams } from 'react-router';

import { sortMoviesByRating } from '../../lib/sortMoviesByRating';
import { MOVIES_PER_PAGE } from '../../config/constants';
import { GENRES_RU } from '@/entities/genre/config/genresRu';

import { BackTitleBar, Section } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/lib';
import { MovieCard } from '@/entities/movie/ui/movie-card';

export function GenrePage() {
  const [page, setPage] = useState(1);
  const { genre } = useParams();
  const { data } = useGetByGenreQuery(
    genre
      ? { genre, page, sortFunc: sortMoviesByRating, count: MOVIES_PER_PAGE }
      : skipToken,
  );

  return (
    <Section indents={'160px'}>
      <S.StyledWrapper>
        <BackTitleBar>
          <h1>{capitalizeFirstLetter(GENRES_RU[genre ?? ''])}</h1>
        </BackTitleBar>
        <S.StyledMovieWrapper>
          {data &&
            data.map(({ id, posterUrl, title }) => (
              <MovieCard {...{ id, posterUrl, title }} />
            ))}
        </S.StyledMovieWrapper>
      </S.StyledWrapper>
    </Section>
  );
}
