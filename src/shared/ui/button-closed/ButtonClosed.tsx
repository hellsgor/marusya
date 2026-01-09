import s from './ButtonClosed.module.scss';
import clsx from 'clsx';

import type { ButtonHTMLAttributes } from 'react';

import { forwardRef } from 'react';

import { Icon } from '@/shared/ui/icon';

type ButtonClosedProps = {
  className?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

export const ButtonClosed = forwardRef<HTMLButtonElement, ButtonClosedProps>(
  ({ className, onClick, disabled }, ref) => {
    return (
      <button
        className={clsx(s.buttonClosed, className)}
        type="button"
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon.Cross />
      </button>
    );
  },
);

ButtonClosed.displayName = 'ButtonClosed';
