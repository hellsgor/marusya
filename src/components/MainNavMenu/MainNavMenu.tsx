import { useLocation } from 'react-router';
import type { MenuItemModel } from '../../models';
import { MenuItem } from '../../ui/MenuItem/MenuItem';

interface MainNavMenuProps {
  items: MenuItemModel[];
  className: string;
}

export function MainNavMenu({ items, className }: MainNavMenuProps) {
  const { pathname } = useLocation();

  return (
    <nav className={className}>
      {items.map((item, idx) => (
        <MenuItem
          key={item.id ?? idx}
          {...{ ...item, isActive: pathname === item.href }}
        />
      ))}
    </nav>
  );
}
