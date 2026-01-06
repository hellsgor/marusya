import s from './ResultsList.module.scss';
import clsx from 'clsx';

import type { MoviesModel } from '@/entities/movie';
import { SearchResult } from '../search-result';

type ResultsListProps = {
  className?: string;
  results: MoviesModel | undefined;
};

export function ResultsList({ results, className }: ResultsListProps) {
  return (
    <ul className={clsx(s.resultsList, className)} role="list">
      {results?.length &&
        results.map((movie) => (
          <li className={s.resultsList__result} key={movie.id}>
            <SearchResult data={movie} />
          </li>
        ))}
    </ul>
  );
}
