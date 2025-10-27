import { Poster } from '@/shared/ui/poster';
import * as S from './MovieDetail.styled';
import { useAppSelector } from '@/shared/lib/hooks';
import { Rating } from '../rating';
import { formatRuntime } from '../../lib/helpers/formatRuntime';
import { getRuGenreName } from '@/entities/genre/@x/movie';
import { Icon, Spoiler } from '@/shared/ui';

export function MovieDetail() {
  const movie = useAppSelector((state) => state.currentMovie.movie);
  // console.log(movie);

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
          <S.TrailerButton>Трейлер</S.TrailerButton>
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
          src={movie?.backdropUrl || undefined}
          alt={`${movie?.title} poster`}
        />
      </S.PosterWrapper>
    </S.Root>
  );
}
