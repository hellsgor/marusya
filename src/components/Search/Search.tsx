import st from './Search.module.scss';

import { SearchInput } from '../../ui/SearchInput/SearchInput';

export function Search() {
  return (
    <div className={st.search}>
      <SearchInput placeholder="Поиск" name="search-movie" />
    </div>
  );
}
