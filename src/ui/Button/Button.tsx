import clsx from 'clsx';
import st from './Button.module.scss';
import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
  memo,
  forwardRef,
  type Ref,
} from 'react';
import { NavLink } from 'react-router';

type ButtonVariantsType = 'primary' | 'secondary' | 'ghost';

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariantsType;
  wide?: boolean;
  smallPaddings?: boolean;
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

const ButtonComponent = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    children,
    variant = 'primary',
    wide = false,
    smallPaddings = false,
    className,
    href,
    ...restProps
  },
  ref,
) {
  const classes = clsx(
    st.button,
    st[`button_${variant}`],
    wide && st.button_wide,
    smallPaddings && st.button_smallPaddings,
    className,
  );

  if (href) {
    return (
      <NavLink
        className={classes}
        to={href}
        ref={ref as Ref<HTMLAnchorElement>}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

export const Button = memo(ButtonComponent);
