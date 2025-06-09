import st from './Spoiler.module.scss';
import clsx from 'clsx';

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

import { Button } from '../Button/Button';

export function Spoiler({
  children,
  rows = 3,
  buttonTexts = ['Свернуть', 'Показать'],
  className,
}: {
  children: ReactNode;
  rows?: number;
  buttonTexts?: [string, string];
  className?: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHigh, setIsHigh] = useState(false);
  const [limit, setLimit] = useState(0);

  useLayoutEffect(() => {
    if (!rows || !childrenRef.current || !wrapperRef.current) {
      return;
    }

    setLimit(
      Math.ceil(
        rows * parseFloat(getComputedStyle(wrapperRef.current).lineHeight),
      ),
    );

    setIsHigh(childrenRef.current.scrollHeight > limit);

    return () => {
      setIsHigh(false);
    };
  }, [children, rows, limit]);

  useLayoutEffect(() => {
    if (!isHigh) {
      contentRef.current?.classList.add(
        st.spoiler__content_show,
        st.spoiler__content_static,
      );
      return;
    } else {
      setTimeout(() => {
        contentRef.current?.classList.remove(st.spoiler__content_static);
      }, 0);
    }

    contentRef.current?.classList[`${isCollapsed ? 'add' : 'remove'}`](
      st.spoiler__content_show,
    );
  }, [isCollapsed, isHigh]);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={clsx(st.spoiler, className)}>
      <div
        className={clsx(st.spoiler__content, st.spoiler__content_static)}
        ref={contentRef}
      >
        <div
          ref={wrapperRef}
          className={st.spoiler__contentWrapper}
          style={isHigh ? { minHeight: `${rows}lh` } : {}}
        >
          <div ref={childrenRef}>{children}</div>
        </div>
      </div>

      {isHigh && (
        <Button variant="ghost" onClick={toggle} className={st.spoiler__button}>
          {isCollapsed ? buttonTexts[0] : buttonTexts[1]}
        </Button>
      )}
    </div>
  );
}
