import s from './MovieContent.module.scss';

import type { MovieModel } from '../../../entities/movie/model/types';

import { MetaItemsRow, MovieDescription } from './components';

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
