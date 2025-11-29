import s from './MenuItem.module.scss';
import clsx from 'clsx';

import { NavLink } from 'react-router';
import type { MenuItemProps } from './MenuItem.types';

export function MenuItem({
  href,
  onClick,
  children,
  className,
}: MenuItemProps) {
  const getClassName = (isActive: boolean) =>
    clsx(s.menuItem, isActive && s.menuItem_active, className);

  if (href)
    return (
      <NavLink to={href} className={({ isActive }) => getClassName(isActive)}>
        {children}
      </NavLink>
    );

  if (onClick)
    return (
      <button type="button" onClick={onClick} className={getClassName(false)}>
        {children}
      </button>
    );
}
