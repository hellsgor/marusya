import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

interface BaseMenuItem {
  children: ReactNode;
  isActive?: boolean;
  id?: number;
}

export type MenuItemModel =
  | (BaseMenuItem &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        href: string;
        onClick?: never;
      })
  | (BaseMenuItem &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onCLick'> & {
        onClick: () => void;
        href?: never;
      });
