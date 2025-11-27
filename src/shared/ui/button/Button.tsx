import s from './Button.module.scss';
import clsx from 'clsx';

import type {
  ButtonProps,
  PropsAsLink,
  PropsAsExternal,
  PropsAsButton,
} from './Button.types';

import { Link } from 'react-router';
import { forwardRef } from 'react';

function isLinkProps(p: ButtonProps): p is PropsAsLink {
  return 'to' in p;
}

function isExternalProps(p: ButtonProps): p is PropsAsExternal {
  return 'href' in p;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    variant = 'primary',
    wide = false,
    smallPaddings = false,
    className,
    type = 'button',
    ...rest
  } = props;

  const classNameStr = clsx(
    s.button,
    {
      [s.button_primary]: variant === 'primary',
      [s.button_secondary]: variant === 'secondary',
      [s.button_ghost]: variant === 'ghost',
      [s.button_wide]: wide,
      [s.button_smallPaddings]: smallPaddings,
    },
    className,
  );

  if (isLinkProps(props)) {
    return (
      <Link
        {...props}
        className={classNameStr}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  if (isExternalProps(props)) {
    const { disabled, onClick, ...restAnchor } = props;

    return (
      <a
        {...restAnchor}
        className={classNameStr}
        aria-disabled={disabled || undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as PropsAsButton;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classNameStr}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {children}
    </button>
  );
});
