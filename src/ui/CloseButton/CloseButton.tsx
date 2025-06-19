import st from './CloseButton.module.scss';
import { Cross } from '../icons';
import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClick: () => void;
}

export function CloseButton({ className, ...restProps }: CloseButtonProps) {
  return (
    <button
      className={clsx(st.closeButton, className)}
      type="button"
      {...restProps}
    >
      <Cross />
    </button>
  );
}
