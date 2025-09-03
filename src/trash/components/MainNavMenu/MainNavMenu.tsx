import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { MAIN_MENU_ITEMS } from '../../constants';
import { useLocation } from 'react-router';

interface MainNavMenuProps {
  isVertTablet: boolean;
  className: string;
}

export function MainNavMenu({ isVertTablet, className }: MainNavMenuProps) {
  const { pathname } = useLocation();

  return (
    <nav className={className}>
      {MAIN_MENU_ITEMS.map((item) => {
        const Child = item.children[isVertTablet ? 'mobile' : 'desktop'];
        if (!Child) return null;

        const content = typeof Child === 'function' ? <Child /> : Child;

        return (
          <MenuItem
            key={item.children.desktop}
            href={item.href}
            children={content}
            isActive={pathname === item.href}
          />
        );
      })}
    </nav>
  );
}
