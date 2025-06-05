import type { UseQueryResult } from '@tanstack/react-query';
import type { MovieModel } from '../../models/Movie';
import st from './MovieDetail.module.scss';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import Poster from '../Poster/Poster';
import { Heart, Refresh } from '../../ui/icons';
import { queryClient } from '../../api/queryClient';
import clsx from 'clsx';

type MovieDetailType = Pick<
  MovieModel,
  | 'id'
  | 'title'
  | 'backdropUrl'
  | 'plot'
  | 'tmdbRating'
  | 'releaseYear'
  | 'genres'
  | 'runtime'
>;

interface MovieDetailProps {
  query: UseQueryResult<MovieDetailType | undefined>;
  isRefreshable?: boolean;
}

export function MovieDetail({
  query: { data, isFetching, isError },
  isRefreshable = false,
}: MovieDetailProps) {
  if (isFetching) {
    return (
      <div className={clsx(st.movieDetail, st.movieDetail_withLoader)}>
        <Loader />
      </div>
    );
  }

  if (!data || isError) {
    return <span>Что-то пошло не так. Попробуйте перезагрузить страницу.</span>;
  }

  const {
    id,
    title,
    backdropUrl,
    plot,
    tmdbRating,
    releaseYear,
    genres,
    runtime,
  } = data;

  const runtimeStr = `${Math.trunc(runtime / 60) > 0 ? Math.trunc(runtime / 60) + ' ч ' : ''}${runtime % 60} мин`;

  return (
    <div className={st.movieDetail}>
      {isFetching && <Loader />}

      <div className={st.movieDetail__details}>
        <div className={st.movieDetail__info}>
          <div className={st.movieDetail__detailsItems}>
            <span>{tmdbRating}</span>
            <span>{releaseYear}</span>
            {genres.map((genre, idx) => (
              <span key={idx}>{genre}</span>
            ))}
            <span>{runtimeStr}</span>
          </div>
          <h1 className={clsx('heading heading_1', st.movieDetail__title)}>
            {title}
          </h1>
          <p className={st.movieDetail__plot}>{plot}</p>
        </div>

        <div className={st.movieDetail__actions}>
          <Button type="button">Трейлер</Button>
          <Button href={`/movies/${id}`} variant="secondary">
            О фильме
          </Button>
          <Button type="button" variant="secondary" smallPaddings={true}>
            <Heart />
          </Button>
          {isRefreshable && (
            <Button
              type="button"
              variant="secondary"
              smallPaddings={true}
              onClick={() => {
                queryClient.invalidateQueries({
                  queryKey: ['movies', 'random'],
                });
              }}
            >
              <Refresh />
            </Button>
          )}
        </div>
      </div>

      <div className={st.movieDetail__poster}>
        <Poster src={backdropUrl ?? undefined} alt={`${title} poster`} />
      </div>
    </div>
  );
}
