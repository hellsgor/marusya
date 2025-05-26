import st from './MenuItem.module.scss';
import clsx from 'clsx';
import type { MenuItemModel } from '../../models';
import { NavLink } from 'react-router';

type MenuItemProps = MenuItemModel;

export function MenuItem({
  href,
  onClick,
  children,
  isActive = false,
}: MenuItemProps) {
  if (href?.length) {
    return (
      <NavLink
        to={href}
        className={clsx(st.menuItem, isActive ? st.menuItem_active : null)}
      >
        {children}
      </NavLink>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={clsx(st.menuItem, isActive ? st.menuItem_active : null)}
      >
        {children}
      </button>
    );
  }
}
