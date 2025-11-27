import s from './MovieList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';

import { MovieCard } from '../movie-card';

type MovieListProps = {
  items: MoviesModel;
  className?: string;
};

export function MovieList({ items, className }: MovieListProps) {
  return (
    <div className={clsx(s.movieList, className)}>
      {items.map(({ id, posterUrl, title }) => (
        <MovieCard key={id} {...{ id, posterUrl, title }} />
      ))}
    </div>
  );
}
