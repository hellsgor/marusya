import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

export type ButtonVariants = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariants;
  wide?: boolean;
  smallPaddings?: boolean;
  className?: string;
};

export type PropsAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type PropsAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    type?: never;
    disabled?: boolean;
  };

type StyledButtonProps = {
  $variant?: ButtonVariants;
  $wide?: boolean;
  $smallPaddings?: boolean;
};

export type ButtonOwnProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps;
