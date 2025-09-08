import { NavLink } from 'react-router';
import type { MenuItemProps } from './types';
import * as StyledItem from './MenuItem.styled';
import clsx from 'clsx';

export function MenuItem({
  href,
  onClick,
  isMobileActive = false,
  children,
  className,
}: MenuItemProps) {
  const classNameStr = clsx(isMobileActive ? '' : 'noMobileActive', className);

  if (href)
    return (
      <StyledItem.Root as={NavLink} to={href} className={classNameStr}>
        {children}
      </StyledItem.Root>
    );

  if (onClick)
    return (
      <StyledItem.Root
        as={'button'}
        type="button"
        onClick={onClick}
        className={classNameStr}
      >
        {children}
      </StyledItem.Root>
    );
}
