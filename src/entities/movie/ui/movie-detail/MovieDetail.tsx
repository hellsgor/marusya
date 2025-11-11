import { Poster } from '@/shared/ui/poster';
import * as S from './MovieDetail.styled';
import { Rating } from '../rating';
import { formatRuntime } from '../../lib/helpers/formatRuntime';
import { getRuGenreName } from '@/entities/genre/@x/movie';
import { Icon, Spoiler } from '@/shared/ui';
import { memo } from 'react';
import type { MovieModel } from '../../model/types';

type MovieDetailProps = {
  movie: MovieModel;
  onTrailerButtonClick: () => void;
};

export const MovieDetail = memo(function MovieDetail({
  onTrailerButtonClick,
  movie,
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
