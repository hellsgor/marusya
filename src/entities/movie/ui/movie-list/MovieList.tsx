import s from './MovieList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';
import type { ComponentProps, ComponentType } from 'react';

import { MovieCard } from '../movie-card';

type MovieListProps = {
  items: MoviesModel;
  className?: string;
  withRatingPlace?: boolean;
  CardComponent?: ComponentType<ComponentProps<typeof MovieCard>>;
};

export function MovieList({
  items,
  className,
  withRatingPlace = false,
  CardComponent = MovieCard,
}: MovieListProps) {
  return (
    <ul role="list" className={clsx(s.movieList, className)}>
      {items.map(({ id, posterUrl, title }, idx) => (
        <li key={id} className={s.movieList__item}>
          <CardComponent
            id={id}
            posterUrl={posterUrl}
            title={title}
            ratingPlace={withRatingPlace ? idx + 1 : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
