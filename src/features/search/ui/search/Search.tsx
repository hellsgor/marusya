import s from './Search.module.scss';

import { InputSearch } from '@/shared/ui';

export function Search() {
  return (
    <div className={s.search}>
      <InputSearch className={s.search__input} isDark />
    </div>
  );
}
