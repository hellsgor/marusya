import type React from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import type { NavLinkProps } from 'react-router';

type CommonProps = {
  children: ReactNode;
  isActive?: boolean;
  isMobileActive?: boolean;
  className?: string;
};

export type MenuItemProps = (
  | (Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
      href: string;
      onClick?: never;
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: never;
    })
) &
  CommonProps;

type StyledMenuItemProps = {
  $isActive?: boolean;
};

export type MenuItemOwnProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & StyledMenuItemProps)
  | (NavLinkProps & StyledMenuItemProps);
