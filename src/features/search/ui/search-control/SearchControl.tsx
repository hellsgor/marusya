import s from './SearchControl.module.scss';
import clsx from 'clsx';

import { forwardRef, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router';

import { ERRORS } from '@/shared/config';
import { Dropdown } from '@/shared/ui';
import {
  getErrorMessage,
  useDebounce,
  useMediaQuery,
  useClickOutside,
} from '@/shared/lib';

import { useSearchQuery } from '../../api/searchApi';
import { MIN_SEARCH_STR_LENGTH } from '../../config';
import { useSearchDropdown } from '../../lib';

import { InputWrapper } from '../input-wrapper';
import { ResultsList } from '../results-list';
import { ResultsSlider } from '../results-slider';

type SearchControlProps = {
  autoFocus?: boolean;
};

export const SearchControl = forwardRef<HTMLInputElement, SearchControlProps>(
  function SearchControl({ autoFocus }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isVerticalTablet = useMediaQuery('lg');
    const { pathname } = useLocation();

    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 400);

    const { data, isFetching, error } = useSearchQuery(
      { string: debouncedValue },
      { skip: debouncedValue.length < MIN_SEARCH_STR_LENGTH },
    );

    const isCorrectLength = value.length >= MIN_SEARCH_STR_LENGTH;

    const { isExpanded, handleClose, handleFocus } = useSearchDropdown({
      hasResults: !!data?.length,
      isCorrectLength,
      searchValue: value,
    });

    useEffect(() => {
      setValue('');
    }, [pathname]);

    useClickOutside(containerRef, handleClose, isExpanded);

    return (
      <div ref={containerRef} className={s.searchControl} onFocus={handleFocus}>
        <InputWrapper
          error={getErrorMessage(error, ERRORS.e006)}
          isSearching={
            (value !== debouncedValue && isCorrectLength) || isFetching
          }
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          value={value}
          autoFocus={autoFocus}
          ref={ref}
        />

        <Dropdown
          className={clsx(s.searchControl__dropdown)}
          isExpanded={isExpanded}
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
