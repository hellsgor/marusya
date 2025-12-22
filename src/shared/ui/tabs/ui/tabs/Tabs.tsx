import s from './Tabs.module.scss';
import clsx from 'clsx';

import type { TabType } from '../../model/types';

import { memo, useEffect, useRef, useState } from 'react';

import { debounce } from '@/shared/lib';

import { Tab } from '../tab/Tab';

type TabsProps = {
  items: TabType[];
  active: number;
  onTabClick: (idx: number) => void;
  className?: string;
};

export const Tabs = memo(function Tabs({
  items,
  active = 0,
  onTabClick,
  className,
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(active);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeIndexRef = useRef(activeIndex);
  const debouncedSetLineStylesRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (!listRef.current || !lineRef.current) return;

    function setLineStyles() {
      if (!listRef.current || !lineRef.current) return;

      const currentActiveIndex = activeIndexRef.current;
      const activeItem = itemRefs.current[currentActiveIndex];
      const activeItemWidth = activeItem?.offsetWidth;
      const activeItemLeft = activeItem?.offsetLeft;

      lineRef.current.style.left = `${activeItemLeft ?? 0}px`;
      lineRef.current.style.width = `${activeItemWidth ?? 0}px`;
    }

    if (!debouncedSetLineStylesRef.current) {
      debouncedSetLineStylesRef.current = debounce(setLineStyles, 300);
    }

    setLineStyles();

    const debouncedHandler = debouncedSetLineStylesRef.current;
    window.addEventListener('resize', debouncedHandler);

    return () => {
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [activeIndex]);

  if (!items?.length) {
    return null;
  }

  return (
    <div className={clsx(s.tabs, className)}>
      <ul className={s.tabs__wrapper} role="list" ref={listRef}>
        {items.map((item, idx) => (
          <li
            ref={(el) => (itemRefs.current[idx] = el)}
            onClick={() => {
              setActiveIndex(idx);
              onTabClick(idx);
            }}
            key={idx}
          >
            <Tab
              {...item}
              disabled={activeIndex === idx}
              // className={activeIndex === idx ? '_active' : undefined}
            />
          </li>
        ))}

        <div ref={lineRef} className={s.tabs__line}></div>
      </ul>
    </div>
  );
});
