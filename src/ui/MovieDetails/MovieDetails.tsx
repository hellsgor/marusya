import st from './MovieDetails.module.scss';
import type { MovieModel } from '../../models';
import { formatRuntime } from '../../helpers';
import { Rating } from '../Rating/Rating';
import clsx from 'clsx';

export type MovieDetailsProps = Pick<
  MovieModel,
  'tmdbRating' | 'releaseYear' | 'genres' | 'runtime'
> & {
  isSmall?: boolean;
};

export function MovieDetails({
  tmdbRating,
  releaseYear,
  genres,
  runtime,
  isSmall,
}: MovieDetailsProps) {
  return (
    <div className={clsx(st.movieDetails, isSmall && st.movieDetails_small)}>
      <Rating rate={tmdbRating} isSmall={isSmall} />
      <span>{releaseYear}</span>
      {genres.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
      <span>{formatRuntime(runtime)}</span>
    </div>
  );
}
