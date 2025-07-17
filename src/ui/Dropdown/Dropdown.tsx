import clsx from 'clsx';
import st from './Dropdown.module.scss';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

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
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        const el = contentRef.current;
        if (el) {
          setHeight(el.scrollHeight);
        }
      });
    }
  }, [children, isOpen]);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const el = contentRef.current;
    const resizeObserver = new ResizeObserver(() => {
      setHeight(el.scrollHeight);
    });

    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  return (
    <div
      className={clsx(
        st.dropdown,
        theme === 'light' && st.dropdown_light,
        className,
      )}
      style={{
        maxHeight: `${isOpen ? height : 0}px`,
      }}
    >
      <div ref={contentRef} className={st.dropdown__content}>
        {children}
      </div>
    </div>
  );
}
