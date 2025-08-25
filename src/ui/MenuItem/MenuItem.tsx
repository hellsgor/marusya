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
  isMobileActive = false,
}: MenuItemProps) {
  const className = clsx(
    st.menuItem,
    isActive ? st.menuItem_active : null,
    isMobileActive ? '' : st.menuItem_noMobileActive,
  );

  if (href?.length) {
    return (
      <NavLink to={href} className={className}>
        {children}
      </NavLink>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}
