import clsx from 'clsx';
import st from './Dropdown.module.scss';
import type { ReactNode } from 'react';

interface DropdownProps {
  theme?: 'dark' | 'light';
  children: ReactNode;
  className?: string;
}

export function Dropdown({
  theme = 'dark',
  children,
  className,
}: DropdownProps) {
  return (
    <div
      className={clsx(
        st.dropdown,
        theme === 'light' && st.dropdown_light,
        className,
      )}
    >
      {children}
    </div>
  );
}
