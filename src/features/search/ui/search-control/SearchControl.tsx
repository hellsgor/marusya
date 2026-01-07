import s from './SearchControl.module.scss';
import clsx from 'clsx';

import { forwardRef, useState } from 'react';

import { ERRORS } from '@/shared/config';

import { Dropdown } from '@/shared/ui';

import { getErrorMessage, useDebounce, useMediaQuery } from '@/shared/lib';

import { useSearchQuery } from '../../api/searchApi';
import { MIN_SEARCH_STR_LENGTH } from '../../config';

import { InputWrapper } from '../input-wrapper';
import { ResultsList } from '../results-list';
import { ResultsSlider } from '../results-slider';

export const SearchControl = forwardRef<HTMLInputElement>(
  function SearchControl(_props, ref) {
    const isVerticalTablet = useMediaQuery('lg');

    const [value, setValue] = useState('');

    const debouncedValue = useDebounce(value, 400);

    const { data, isFetching, error } = useSearchQuery(
      { string: debouncedValue },
      { skip: debouncedValue.length < MIN_SEARCH_STR_LENGTH },
    );

    const isCorrectLength = value.length >= MIN_SEARCH_STR_LENGTH;

    return (
      <div className={s.searchControl}>
        <InputWrapper
          error={getErrorMessage(error, ERRORS.e006)}
          isSearching={
            (value !== debouncedValue && isCorrectLength) || isFetching
          }
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          value={value}
          ref={ref}
        />

        <Dropdown
          className={clsx(s.searchControl__dropdown)}
          isExpanded={isCorrectLength && !!data?.length}
        >
          {isVerticalTablet ? (
            <ResultsSlider results={data} className={s.searchControl__slider} />
          ) : (
            <ResultsList results={data} className={s.searchControl__results} />
          )}
        </Dropdown>
      </div>
    );
  },
);

SearchControl.displayName = 'SearchControl';
