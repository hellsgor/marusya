import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import type { LinkProps } from 'react-router';

export type ButtonVariants = 'primary' | 'secondary' | 'ghost';

export type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariants;
  wide?: boolean;
  smallPaddings?: boolean;
  className?: string;
};

export type PropsAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    to?: never;
  };

export type PropsAsLink = CommonProps &
  Omit<LinkProps, 'children' | 'className'> & {
    href?: never;
    type?: never;
  };

export type PropsAsExternal = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
    type?: never;
    disabled?: boolean;
  };

export type ButtonProps = PropsAsButton | PropsAsLink | PropsAsExternal;
