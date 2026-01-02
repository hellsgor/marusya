import { useState } from 'react';
import s from './Search.module.scss';

import { InputSearch } from '@/shared/ui';

export function Search() {
  const [value, setValue] = useState('');

  return (
    <div className={s.search}>
      <InputSearch
        className={s.search__input}
        name="search"
        value={value}
        onClear={() => {
          setValue('');
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        isDark
      />
    </div>
  );
}
