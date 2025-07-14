import clsx from 'clsx';
import st from './Dropdown.module.scss';
import { useRef, type ReactNode } from 'react';

interface DropdownProps {
  theme?: 'dark' | 'light';
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export function Dropdown({
  theme = 'dark',
  isOpen,
  children,
  className,
}: DropdownProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={clsx(
        st.dropdown,
        theme === 'light' && st.dropdown_light,
        className,
      )}
      style={{
        maxHeight: `${isOpen && contentRef.current ? contentRef.current.offsetHeight : 0}px`,
      }}
    >
      <div ref={contentRef} className={st.dropdown__content}>
        {children}
      </div>
    </div>
  );
}
