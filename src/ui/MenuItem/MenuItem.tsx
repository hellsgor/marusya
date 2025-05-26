import st from './MenuItem.module.scss';
import clsx from 'clsx';
import type { MenuItemModel } from '../../models';

type MenuItemProps = MenuItemModel;

export function MenuItem({
  href,
  onClick,
  children,
  isActive = false,
}: MenuItemProps) {
  if (href?.length) {
    return (
      <a
        href={href}
        className={clsx(st.menuItem, isActive ? st.menuItem_active : null)}
      >
        {children}
      </a>
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
