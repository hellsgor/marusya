import type { ReactNode } from 'react';
import s from './InputsWrapper.module.scss';
import clsx from 'clsx';

type InputWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function InputsWrapper({ children, className }: InputWrapperProps) {
  return <div className={clsx(s.inputsWrapper, className)}>{children}</div>;
}
