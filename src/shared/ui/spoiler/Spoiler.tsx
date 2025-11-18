import s from './Spoiler.module.scss';
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { Button } from '../button';

type SpoilerProps = {
  children: ReactNode;
  rows?: number;
  buttonTexts?: string[];
};

export function Spoiler({
  children,
  rows = 3,
  buttonTexts = ['Свернуть', 'Показать'],
}: SpoilerProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [maxHeight, setMaxHeight] = useState('0px');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fullHeightRef = useRef(0);
  const mountedRef = useRef(false);

  const getChild = () =>
    wrapperRef.current?.children?.[0] as HTMLElement | undefined;

  const measureLineHeight = (el: HTMLElement) =>
    parseFloat(getComputedStyle(el).lineHeight || '16');

  const updateHeights = useCallback(() => {
    const child = getChild();
    if (!child) return;

    const lineH = measureLineHeight(child);
    const collapseH = lineH * rows;

    fullHeightRef.current = child.scrollHeight;

    if (isCollapsed) {
      child.style.display = '-webkit-box';
      child.style.webkitBoxOrient = 'vertical';
      child.style.webkitLineClamp = `${rows}`;
      child.style.overflow = 'hidden';
      setMaxHeight(`${collapseH}px`);
    } else {
      child.style.display = 'block';
      child.style.webkitBoxOrient = '';
      child.style.webkitLineClamp = '';
      child.style.overflow = 'visible';
      setMaxHeight(`${fullHeightRef.current}px`);
    }
  }, [isCollapsed, rows]);

  useLayoutEffect(() => {
    const child = getChild();
    if (!child) return;

    const lineH = measureLineHeight(child);
    const collapseH = lineH * rows;

    if (isCollapsed) {
      child.style.display = '-webkit-box';
      child.style.webkitBoxOrient = 'vertical';
      child.style.webkitLineClamp = `${rows}`;
      child.style.overflow = 'hidden';

      if (!mountedRef.current) {
        wrapperRef.current!.style.transition = 'none';
        setMaxHeight(`${collapseH}px`);
        requestAnimationFrame(() => {
          wrapperRef.current!.style.transition = 'max-height 0.3s ease';
        });
      } else {
        setMaxHeight(`${collapseH}px`);
      }
    }

    mountedRef.current = true;

    const observer = new ResizeObserver(updateHeights);
    observer.observe(wrapperRef.current!);
    observer.observe(child);
    window.addEventListener('resize', updateHeights);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeights);
    };
  }, [rows, updateHeights, isCollapsed]);

  const handleToggle = () => {
    const child = getChild();
    if (!child) return;

    const lineH = measureLineHeight(child);
    const collapseH = lineH * rows;
    const fullH = fullHeightRef.current;

    if (isCollapsed) {
      child.style.display = 'block';
      child.style.overflow = 'visible';
      setMaxHeight(`${fullH}px`);
      setIsCollapsed(false);
    } else {
      const currentH = child.offsetHeight;
      setMaxHeight(`${currentH}px`);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeight(`${collapseH}px`);
        });
      });

      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.propertyName === 'max-height') {
          child.style.display = '-webkit-box';
          child.style.webkitBoxOrient = 'vertical';
          child.style.webkitLineClamp = `${rows}`;
          child.style.overflow = 'hidden';
          wrapperRef.current?.removeEventListener(
            'transitionend',
            onTransitionEnd,
          );
        }
      };

      wrapperRef.current?.addEventListener('transitionend', onTransitionEnd);

      setIsCollapsed(true);
    }
  };

  return (
    <div className={s.spoiler}>
      <div
        className={s.spoiler__wrapper}
        ref={wrapperRef}
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          maxHeight,
        }}
      >
        {typeof children === 'string' ? <div>{children}</div> : children}
      </div>

      <Button
        variant="ghost"
        className={s.spoiler__button}
        onClick={handleToggle}
      >
        {isCollapsed ? buttonTexts[1] : buttonTexts[0]}
      </Button>
    </div>
  );
}
