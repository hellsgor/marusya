import { MenuItem } from '@/shared/ui';
import { NAV_ITEMS } from './MainMenu.constants';
import * as S from './MainMenu.styled';

export function MainMenu() {
  return (
    <nav>
      <S.StyledNavList>
        {Object.values(NAV_ITEMS).map((item) => (
          <li key={item.path}>
            <MenuItem href={item.path}>{item.text}</MenuItem>
          </li>
        ))}
      </S.StyledNavList>
    </nav>
  );
}
