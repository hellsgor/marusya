import s from './Search.module.scss';

import { useMediaQuery } from '@/shared/lib';

import { Button, Icon } from '@/shared/ui';
import { SearchControl } from '../search-control';

export function Search() {
  const isLgBreakpoint = useMediaQuery('lg');

  return (
    <div className={s.search}>
      {isLgBreakpoint ? (
        <Button variant="ghost" smallPaddings className={s.search__button}>
          <Icon.Search />
        </Button>
      ) : (
        <SearchControl />
      )}
    </div>
  );
}
