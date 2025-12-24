import s from './ButtonClosed.module.scss';
import clsx from 'clsx';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { Icon } from '../icon';

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
