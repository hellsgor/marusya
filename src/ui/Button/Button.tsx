import clsx from 'clsx';
import st from './Button.module.scss';
import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
  memo,
} from 'react';
import { NavLink } from 'react-router';

type ButtonVariantsType = 'primary' | 'secondary' | 'ghost';

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariantsType;
  wide?: boolean;
  className?: string;
}

type PropsAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PropsAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = PropsAsButton | PropsAsLink;

export const Button = memo(function Button({
  children,
  variant = 'primary',
  wide = false,
  className,
  href,
  ...restProps
}: ButtonProps) {
  const classes = clsx(
    st.button,
    st[`button_${variant}`],
    wide && st.button_wide,
    className,
  );

  if (href) {
    return (
      <NavLink
        className={classes}
        to={href}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={classes}
      {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
