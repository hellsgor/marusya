import { Poster } from '@/shared/ui/poster';
import * as S from './MovieDetail.styled';
import { Rating } from '../rating';
import { formatRuntime } from '../../lib/helpers/formatRuntime';
import { getRuGenreName } from '@/entities/genre/@x/movie';
import { Button, Icon, Spoiler } from '@/shared/ui';
import { memo } from 'react';
import type { MovieDetailProps } from './types';
import { ROUTES } from '@/shared/routes';

export const MovieDetail = memo(function MovieDetail({
  movie,
  random,
  onTrailerButtonClick,
}: MovieDetailProps) {
  if (!movie) return null;

  return (
    <S.Root>
      <S.Wrapper>
        <S.Content>
          <S.MetaWrapper>
            <Rating rate={movie.tmdbRating ?? 0} />
            {[
              movie.releaseYear,
              ...movie.genres.map((genre) => getRuGenreName(genre)),
              formatRuntime(movie.runtime),
            ].map((item, idx) => (
              <S.MetaItem key={idx}>{item}</S.MetaItem>
            ))}
          </S.MetaWrapper>
          <h1>{movie.title}</h1>
          <Spoiler rows={4}>
            <S.Description>{movie.plot}</S.Description>
          </Spoiler>
        </S.Content>
        <S.Actions>
          {(movie.trailerUrl || movie.trailerYouTubeId) && (
            <S.TrailerButton onClick={onTrailerButtonClick}>
              Трейлер
            </S.TrailerButton>
          )}
          {random && (
            <Button
              to={ROUTES.movie(movie.id, movie.title)}
              variant="secondary"
            >
              О фильме
            </Button>
          )}
          <S.FavoriteButton
            // $isFavoriteMovie
            $variant="secondary"
            $smallPaddings
          >
            <Icon.Heart />
          </S.FavoriteButton>
        </S.Actions>
      </S.Wrapper>

      <S.PosterWrapper>
        <Poster
          src={movie?.backdropUrl || movie?.posterUrl || undefined}
          alt={`${movie?.title} poster`}
        />
      </S.PosterWrapper>
    </S.Root>
  );
});
