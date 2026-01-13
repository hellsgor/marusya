import clsx from 'clsx';
import s from './Container.module.scss';

import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx(s.container, className || null)}>{children}</div>;
}
