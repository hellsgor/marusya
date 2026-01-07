import s from './MovieContent.module.scss';

import { MetaItemsRow } from '@/entities/movie';
import type { MovieModel } from '@/entities/movie';

import { MovieDescription } from './components';

type MovieContentProps = {
  movie: MovieModel;
};

export function MovieContent({ movie }: MovieContentProps) {
  return (
    <div className={s.movieContent}>
      <MetaItemsRow {...movie} />
      <h1>{movie.title}</h1>
      <MovieDescription text={movie.plot} />
    </div>
  );
}
