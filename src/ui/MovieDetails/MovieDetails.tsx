import st from './MovieDetails.module.scss';
import type { MovieModel } from '../../models/Movie';
import { formatRuntime } from '../../helpers';
import { Rating } from '../Rating/Rating';

export type MovieDetailsProps = Pick<
  MovieModel,
  'tmdbRating' | 'releaseYear' | 'genres' | 'runtime'
>;

export function MovieDetails({
  tmdbRating,
  releaseYear,
  genres,
  runtime,
}: MovieDetailsProps) {
  return (
    <div className={st.movieDetails}>
      <Rating rate={tmdbRating} />
      <span>{releaseYear}</span>
      {genres.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
      <span>{formatRuntime(runtime)}</span>
    </div>
  );
}
