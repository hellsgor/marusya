import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import type { NavLinkProps } from 'react-router';

type CommonProps = {
  children: ReactNode;
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

export type MenuItemOwnProps =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | NavLinkProps;
