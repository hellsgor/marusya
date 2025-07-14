import st from './Search.module.scss';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { useMemo, useState, type ChangeEvent } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { debouncer } from '../../helpers/debouncer';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import clsx from 'clsx';

export function Search() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSet = useMemo(() => debouncer(setValue, 500), [setValue]);

  const { data } = useSearch(value);
  console.log(data);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value.length >= 3) {
      debouncedSet(value);
    }
  };

  const handleFocus = {
    focus: () => {
      setIsFocused(true);
    },

    blur: () => {
      setIsFocused(false);
    },
  };

  return (
    <div className={st.search}>
      <div className={st.search__wrapper}>
        <SearchInput
          placeholder="Поиск"
          name="search-movie"
          onChange={handleInputChange}
          onFocus={handleFocus.focus}
          onBlur={handleFocus.blur}
        />

        <Dropdown
          className={clsx(st.search__dropdown)}
          isOpen={!!data?.length && isFocused}
        >
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Dropdown>
      </div>
    </div>
  );
}
