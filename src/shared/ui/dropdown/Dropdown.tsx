import s from './Dropdown.module.scss';
import clsx from 'clsx';

import type { ReactNode } from 'react';

type DropdownProps = {
  children: ReactNode;
  className?: string;
  isExpanded?: boolean;
};

export function Dropdown({ children, isExpanded, className }: DropdownProps) {
  return (
    <div
      className={clsx(
        s.dropdown,
        !isExpanded && s.dropdown_collapsed,
        className,
      )}
    >
      <div className={s.dropdown__inner}>{children}</div>
    </div>
  );
}
