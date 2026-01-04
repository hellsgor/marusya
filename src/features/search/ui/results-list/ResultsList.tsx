import s from './ResultsList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '@/entities/movie';

type ResultsListProps = {
  className?: string;
  results: MoviesModel | undefined;
};

export function ResultsList({ results, className }: ResultsListProps) {
  return (
    <ul className={clsx(s.searchResultsList, className)} role="list">
      {results?.length &&
        results.map((result) => (
          <li className={s.searchResultsList__result} key={result.id}>
            {result.title}
          </li>
        ))}
    </ul>
  );
}
