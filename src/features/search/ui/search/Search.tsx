import s from './Search.module.scss';

import { useMediaQuery } from '@/shared/lib';

import { SearchControl } from '../search-control';
import { SearchMobileView } from '../search-mobile-view';

export function Search() {
  const isLgBreakpoint = useMediaQuery('lg');

  return (
    <div className={s.search}>
      {isLgBreakpoint ? <SearchMobileView /> : <SearchControl />}
    </div>
  );
}
