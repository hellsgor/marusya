import st from './Search.module.scss';

import { SearchIcon } from '../../ui/icons';
import { TextInput } from '../../ui/TextInput/TextInput';

export function Search() {
  return (
    <div className={st.search}>
      <TextInput placeholder="Поиск" icon={SearchIcon} />
    </div>
  );
}
