import s from './MovieList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';

import { MovieCard } from '../movie-card';

type MovieListProps = {
  items: MoviesModel;
  className?: string;
  isTop10?: boolean;
};

export function MovieList({ items, className, isTop10 }: MovieListProps) {
  return (
    <div className={clsx(s.movieList, className)}>
      {items.map(({ id, posterUrl, title }, idx) => (
        <MovieCard
          key={id}
          {...{ id, posterUrl, title }}
          ratingPlace={isTop10 ? idx + 1 : undefined}
        />
      ))}
    </div>
  );
}
