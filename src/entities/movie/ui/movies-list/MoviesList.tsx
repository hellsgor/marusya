import s from './MoviesList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '../../model/types';
import type { ComponentProps, ComponentType } from 'react';

import { MovieCard } from '../movie-card';

type MoviesListProps = {
  items: MoviesModel;
  className?: string;
  withRatingPlace?: boolean;
  CardComponent?: ComponentType<ComponentProps<typeof MovieCard>>;
};

export function MoviesList({
  items,
  className,
  withRatingPlace = false,
  CardComponent = MovieCard,
}: MoviesListProps) {
  return (
    <ul role="list" className={clsx(s.moviesList, className)}>
      {items.map(({ id, posterUrl, title }, idx) => (
        <li key={id} className={s.moviesList__item}>
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
