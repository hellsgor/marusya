import s from './Search.module.scss';
import clsx from 'clsx';

import { useState } from 'react';

import { MIN_SEARCH_STR_LENGTH } from '../../config';
import { ERRORS } from '@/shared/config';

import { useSearchQuery } from '../../api/searchApi';
import { getErrorMessage, useDebounce } from '@/shared/lib';

import { Dropdown } from '@/shared/ui';
import { ResultsList } from '../results-list';
import { InputWrapper } from '../input-wrapper';

export function Search() {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 400);

  const { data, isFetching, error } = useSearchQuery(
    { string: debouncedValue },
    { skip: debouncedValue.length < MIN_SEARCH_STR_LENGTH },
  );

  const isCorrectLength = value.length >= MIN_SEARCH_STR_LENGTH;

  return (
    <div className={s.search}>
      <InputWrapper
        error={getErrorMessage(error, ERRORS.e006)}
        isSearching={
          (value !== debouncedValue && isCorrectLength) || isFetching
        }
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        value={value}
      />

      <Dropdown
        className={clsx(s.search__dropdown)}
        isExpanded={isCorrectLength && !!data?.length}
      >
        <ResultsList results={data} className={s.search__results} />
      </Dropdown>
    </div>
  );
}
