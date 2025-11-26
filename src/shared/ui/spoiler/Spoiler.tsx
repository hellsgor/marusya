import s from './Spoiler.module.scss';

import { Button } from '../button';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import clsx from 'clsx';

type MaxHeight = string;
type MaxRows = number;

type SpoilerProps = {
  children: ReactNode | string;
  max?: MaxHeight | MaxRows;
  buttonTexts?: [string, string];
};

export function Spoiler({
  children,
  max = 3,
  buttonTexts = ['Свернуть', 'Показать'],
}: SpoilerProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const maxHeightRef = useRef<number | undefined>(undefined);

  function getChild() {
    return wrapperRef.current?.querySelector('*');
  }

  function getMaxHeight() {
    return typeof max === 'string'
      ? parseInt(max, 10)
      : (() => {
          const child = getChild();
          if (!child) {
            console.warn(`child not found: ${child}`);
            return;
          }

          maxHeightRef.current =
            Math.round(parseFloat(getComputedStyle(child).lineHeight)) * max;
          return maxHeightRef.current;
        })();
  }

  function checkCollapsed() {
    if (!wrapperRef?.current) return;

    const wrapperHeight = wrapperRef?.current?.scrollHeight;
    const maxHeight = getMaxHeight();

    if (wrapperHeight && maxHeight && wrapperHeight - 2 > maxHeight) {
      setIsCollapsed(true);

      const child = getChild();
      if (child && child instanceof HTMLElement) {
        child.style.webkitLineClamp = `${max}`;
      }
    }
  }

  useLayoutEffect(() => {
    checkCollapsed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const maxHeight = maxHeightRef.current;

    if (!wrapper || !maxHeight || isCollapsed === null) return;

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (
        event.target === wrapperRef.current &&
        event.propertyName === 'max-height'
      ) {
        const child = getChild();
        if (child && child instanceof HTMLElement) {
          if (isCollapsed) {
            child.style.webkitLineClamp = `${max}`;
          } else {
            child.style.webkitLineClamp = '';
          }
        }
      }
    };

    if (isCollapsed) {
      wrapper.style.maxHeight = `${maxHeightRef.current}px`;
    } else {
      wrapper.style.maxHeight = `${wrapperRef?.current?.scrollHeight}px`;
    }

    wrapper.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      wrapper.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [isCollapsed, max]);

  const handleCollapse = () => {
    setIsCollapsed((state) => (state === null ? null : !state));
  };

  return (
    <div className={s.spoiler}>
      <div
        ref={wrapperRef}
        className={clsx(
          s.spoiler__wrapper,
          isCollapsed && s.spoiler__wrapper_collapsed,
        )}
      >
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>

      {isCollapsed !== null && isCollapsed !== undefined && (
        <Button
          onClick={handleCollapse}
          variant="ghost"
          className={s.spoiler__button}
        >
          {isCollapsed ? buttonTexts[1] : buttonTexts[0]}
        </Button>
      )}
    </div>
  );
}
