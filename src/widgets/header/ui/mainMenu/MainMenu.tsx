import s from './mainMenu.module.scss';
import { clsx } from 'clsx';

import { NAV_ITEMS } from '../../config';
import { MenuItem } from '@/shared/ui';
import { useMediaQuery } from '@/shared/lib';

type MainMenuProps = {
  className?: string;
};

export function MainMenu({ className }: MainMenuProps) {
  const isIconViewed = useMediaQuery('lg');

  return (
    <nav className={clsx(s.mainMenu, className)}>
      <ul className={s.mainMenu__list} role="list">
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
      </ul>
    </nav>
  );
}
