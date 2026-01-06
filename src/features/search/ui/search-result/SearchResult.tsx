import s from './SearchResult.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '@/entities/movie';

import { MetaItemsRow } from '@/entities/movie';
import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';
import { Poster } from '@/shared/ui';

type SearchResultType = {
  data: MovieModel;
  className?: string;
};

export function SearchResult({ data, className }: SearchResultType) {
  return (
    <Link
      to={ROUTES.movie(data.id, data.title)}
      className={clsx(s.searchResult, className)}
    >
      <Poster
        className={s.searchResult__poster}
        src={data.posterUrl || data.backdropUrl || ''}
      />
      <div className={s.searchResult__wrapper}>
        <MetaItemsRow
          {...data}
          isShortFormat={true}
          genres={data.genres.slice(0, 2)}
          className={s.searchResult__metaRow}
        />
        <p className={s.searchResult__title}>{data.title}</p>
      </div>
    </Link>
  );
}
