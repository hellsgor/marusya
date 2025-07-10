import st from './Search.module.scss';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { useMemo, useState, type ChangeEvent } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { debouncer } from '../../helpers/debouncer';
import { Dropdown } from '../../ui/Dropdown/Dropdown';

export function Search() {
  const [value, setValue] = useState<string | undefined>(undefined);

  const debouncedSet = useMemo(() => debouncer(setValue, 500), [setValue]);

  const { data } = useSearch(value);
  console.log(data);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value.length >= 3) {
      debouncedSet(value);
    }
  };

  return (
    <div className={st.search}>
      <div className={st.search__wrapper}>
        <SearchInput
          placeholder="Поиск"
          name="search-movie"
          onChange={handleInputChange}
        />

        <Dropdown className={st.search__dropdown}>
          <p>dcsdfdsfsdf</p>
          <p>dcsdfdsfsdf</p>
          <p>dcsdfdsfsdf</p>
          <p>dcsdfdsfsdf</p>
        </Dropdown>
      </div>
    </div>
  );
}
