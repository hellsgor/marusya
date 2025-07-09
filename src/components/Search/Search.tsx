import st from './Search.module.scss';

import { SearchInput } from '../../ui/SearchInput/SearchInput';
import { type ChangeEvent } from 'react';

export function Search() {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={st.search}>
      <div className={st.search__wrapper}>
        <SearchInput
          placeholder="Поиск"
          name="search-movie"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
