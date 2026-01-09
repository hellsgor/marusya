import s from './Search.module.scss';

import type { SearchControlRef } from '../search-control/SearchControl';

import { useMediaQuery } from '@/shared/lib';

import { SearchControl } from '../search-control';
import { SearchMobileView } from '../search-mobile-view';

import { forwardRef } from 'react';

export const Search = forwardRef<SearchControlRef>(
  function Search(_props, ref) {
    const isLgBreakpoint = useMediaQuery('lg');

    return (
      <div className={s.search}>
        {isLgBreakpoint ? <SearchMobileView /> : <SearchControl ref={ref} />}
      </div>
    );
  },
);

Search.displayName = 'Search';
