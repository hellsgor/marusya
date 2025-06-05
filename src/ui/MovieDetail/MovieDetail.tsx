import st from './MovieDetail.module.scss';

import type { MovieModel } from '../../models/Movie';

import clsx from 'clsx';

import { Button } from '../Button/Button';
import Poster from '../Poster/Poster';
import { Heart, Refresh } from '../../ui/icons';

type MovieDetailType = Pick<
  MovieModel,
  | 'title'
  | 'backdropUrl'
  | 'plot'
  | 'tmdbRating'
  | 'releaseYear'
  | 'genres'
  | 'runtime'
>;

interface MovieDetailProps {
  data: MovieDetailType;
  onRefresh?: () => void;
  url?: string;
}

export function MovieDetail({
  data: { title, backdropUrl, plot, tmdbRating, releaseYear, genres, runtime },
  onRefresh,
  url,
}: MovieDetailProps) {
  const runtimeStr = `${Math.trunc(runtime / 60) > 0 ? Math.trunc(runtime / 60) + ' ч ' : ''}${runtime % 60} мин`;

  return (
    <div className={st.movieDetail}>
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
          {url && (
            <Button href={url} variant="secondary">
              О фильме
            </Button>
          )}
          <Button type="button" variant="secondary" smallPaddings={true}>
            <Heart />
          </Button>
          {onRefresh && (
            <Button
              type="button"
              variant="secondary"
              smallPaddings={true}
              onClick={onRefresh}
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
