import s from './Search.module.scss';

import { useState, type ChangeEvent } from 'react';

import { MIN_SEARCH_STR_LENGTH } from '../../config';
import { ERRORS } from '@/shared/config';

import { useSearchQuery } from '../../api/searchApi';
import { getErrorMessage, useDebounce } from '@/shared/lib';

import { InputSearch, Loader } from '@/shared/ui';

export function Search() {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 400);

  const { data, isFetching, error } = useSearchQuery(
    { string: debouncedValue },
    { skip: debouncedValue.length < MIN_SEARCH_STR_LENGTH },
  );

  const isCorrectLength = value.length >= MIN_SEARCH_STR_LENGTH;

  const isSearching =
    (value !== debouncedValue && isCorrectLength) || isFetching;

  const searchResult = isCorrectLength ? data : undefined;

  return (
    <div className={s.search}>
      <div className={s.search__inputWrapper}>
        <InputSearch
          className={s.search__input}
          name="search"
          autoComplete="off"
          value={value}
          onClear={() => setValue('')}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          isDark
          error={getErrorMessage(error, ERRORS.e006)}
        />
        {isSearching && <Loader className={s.search__loader} size="small" />}
      </div>
    </div>
  );
}
