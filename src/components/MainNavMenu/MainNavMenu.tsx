import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { MAIN_MENU_ITEMS } from '../../constants';

interface MainNavMenuProps {
  pathname: string;
  isVertTablet: boolean;
  className: string;
}

export function MainNavMenu({
  pathname,
  isVertTablet,
  className,
}: MainNavMenuProps) {
  return (
    <nav className={className}>
      {MAIN_MENU_ITEMS.map((item) => {
        const Child = item.children[isVertTablet ? 'mobile' : 'desktop'];
        if (!Child) return null;

        const content = typeof Child === 'function' ? <Child /> : Child;

        return (
          <MenuItem
            key={item.children.desktop ?? item.children.mobile}
            href={item.href}
            children={content}
            isActive={pathname === item.href}
          />
        );
      })}
    </nav>
  );
}
