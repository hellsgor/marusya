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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          et tempora dolorem necessitatibus quas natus officia vitae ad
          consequatur obcaecati. Ipsam iusto fugit reiciendis libero sint, aut
          id. Quas, quisquam.
        </p>
      </S.StyledWrapper>
    </Section>
  );
}
