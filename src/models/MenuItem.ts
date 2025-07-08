import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
  SVGProps,
} from 'react';

interface BaseMenuItem {
  children: ReactNode | ComponentType<SVGProps<SVGSVGElement>>;
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
