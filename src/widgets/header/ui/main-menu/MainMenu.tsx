import { MenuItem } from '@/shared/ui';
import { NAV_ITEMS } from './MainMenu.constants';
import * as S from './MainMenu.styled';
import { useMediaQuery } from '@/shared/lib';

export function MainMenu() {
  const isIconViewed = useMediaQuery('lg');
  return (
    <nav>
      <S.StyledNavList>
        {Object.values(NAV_ITEMS).map((item) => {
          const ItemChildren = isIconViewed ? item.icon : item.text;
          if (!ItemChildren) {
            return null;
          }

          return (
            <li key={item.path}>
              <MenuItem href={item.path}>
                {typeof ItemChildren === 'string' ? (
                  ItemChildren
                ) : (
                  <ItemChildren />
                )}
              </MenuItem>
            </li>
          );
        })}
      </S.StyledNavList>
    </nav>
  );
}
