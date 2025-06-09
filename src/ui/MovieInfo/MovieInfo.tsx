import st from './MovieInfo.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../models/Movie';
import type { MovieDetailsProps } from '../MovieDetails/MovieDetails';

import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Spoiler } from '../Spoiler/Spoiler';

export type MovieInfoProps = {
  data: Pick<MovieModel, 'title' | 'plot'> & MovieDetailsProps;
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

      <Spoiler rows={4} className={st.movieInfo__plot}>
        <p>{plot}</p>
      </Spoiler>
    </div>
  );
}
