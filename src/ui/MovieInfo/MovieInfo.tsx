import st from './MovieInfo.module.scss';
import clsx from 'clsx';
import type { MovieModel } from '../../models/Movie';
import { MovieDetails } from '../MovieDetails/MovieDetails';

type MovieInfoProps = {
  data: Pick<
    MovieModel,
    'title' | 'plot' | 'tmdbRating' | 'releaseYear' | 'genres' | 'runtime'
  >;
};

export function MovieInfo({
  data: { title, plot, tmdbRating, releaseYear, genres, runtime },
}: MovieInfoProps) {
  return (
    <div className={st.movieInfo}>
      <MovieDetails
        releaseYear={releaseYear}
        genres={genres}
        runtime={runtime}
        tmdbRating={tmdbRating}
      />
      <h1 className={clsx('heading heading_1', st.movieInfo__title)}>
        {title}
      </h1>
      <p className={st.movieInfo__plot}>{plot}</p>
    </div>
  );
}
