import st from './Search.module.scss';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { useMemo, useState, type ChangeEvent } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { debouncer } from '../../helpers/debouncer';
import { Dropdown } from '../../ui/Dropdown/Dropdown';
import clsx from 'clsx';
import { MovieFullCard } from '../../ui/MovieFullCard/MovieFullCard';
import { queryClient } from '../../api/queryClient';

export function Search() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSet = useMemo(() => debouncer(setValue, 500), [setValue]);

  const { data } = useSearch(value);

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

  const clearData = () => {
    setValue(undefined);
    queryClient.removeQueries({ queryKey: ['search'], exact: false });
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
          clearButtonCallback={clearData}
        />

        <Dropdown
          className={clsx(st.search__dropdown)}
          isOpen={!!data?.length && isFocused}
        >
          {data?.map((item) => (
            <MovieFullCard
              key={item.id}
              genres={item.genres}
              title={item.title}
              releaseYear={item.releaseYear}
              runtime={item.runtime}
              posterUrl={item.posterUrl}
              tmdbRating={item.tmdbRating}
              href={`/movies/${item.id}`}
              alt={`${item.title} poster`}
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
}
