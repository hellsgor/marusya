import { MenuItem } from '@/shared/ui';
import { NAV_ITEMS } from './MainMenu.constants';
import { useLocation } from 'react-router';
import * as S from './MainMenu.styled';

export function MainMenu() {
  const { pathname } = useLocation();

  return (
    <nav>
      <S.StyledNavList>
        {Object.values(NAV_ITEMS).map((item) => (
          <li key={item.path}>
            <MenuItem href={item.path} isActive={pathname === item.path}>
              {item.text}
            </MenuItem>
          </li>
        ))}
      </S.StyledNavList>
    </nav>
  );
}
