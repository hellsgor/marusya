import s from './Card.module.scss';
import clsx from 'clsx';

import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  smaller?: true;
  className?: string;
};

export function Card({ children, smaller, className }: CardProps) {
  return (
    <div className={clsx(s.card, smaller && s.card_smaller, className)}>
      {children}
    </div>
  );
}
