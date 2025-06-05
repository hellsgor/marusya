import st from './MovieDetails.module.scss';
import type { MovieModel } from '../../models/Movie';
import { formatRuntime } from '../../helpers';

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
      <span>{tmdbRating}</span>
      <span>{releaseYear}</span>
      {genres.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
      <span>{formatRuntime(runtime)}</span>
    </div>
  );
}
