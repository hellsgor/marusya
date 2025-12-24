import s from './ButtonClosed.module.scss';
import clsx from 'clsx';

import { forwardRef } from 'react';

import { Icon } from '../icon';

type ButtonClosedProps = {
  className?: string;
};

export const ButtonClosed = forwardRef<HTMLButtonElement, ButtonClosedProps>(
  ({ className }, ref) => {
    return (
      <button
        className={clsx(s.buttonClosed, className)}
        type="button"
        ref={ref}
      >
        <Icon.Cross />
      </button>
    );
  },
);

ButtonClosed.displayName = 'ButtonClosed';
