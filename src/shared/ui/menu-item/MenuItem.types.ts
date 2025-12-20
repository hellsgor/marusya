import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
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
