import st from './MovieDetail.module.scss';

import type { MovieModel } from '../../models/Movie';

import { Button } from '../Button/Button';
import Poster from '../Poster/Poster';
import { Heart, Refresh } from '../../ui/icons';
import { MovieInfo } from '../MovieInfo/MovieInfo';

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
  return (
    <div className={st.movieDetail}>
      <div className={st.movieDetail__wrapper}>
        <MovieInfo
          data={{ title, plot, tmdbRating, releaseYear, genres, runtime }}
        />

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
