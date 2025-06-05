import st from './ExpandableText.module.scss';
import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { Button } from '../Button/Button';
import clsx from 'clsx';

type ExpandableTextProps = {
  children: ReactNode;
  maxHeight: number;
};

export function ExpandableText({ children, maxHeight }: ExpandableTextProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(true);

  const [full, setFull] = useState(0);
  const [collapsed, setCollapsed] = useState(maxHeight);
  const [lines, setLines] = useState(0);

  useLayoutEffect(() => {
    const wrapper = contentRef.current;
    if (!wrapper) {
      return;
    }

    setFull(wrapper.scrollHeight);

    const lineH = parseFloat(
      getComputedStyle((wrapper.firstElementChild as HTMLElement) || wrapper)
        .lineHeight,
    );

    const visibleLines = Math.floor(maxHeight / lineH);
    setLines(visibleLines);
    setCollapsed(Math.ceil(visibleLines * lineH));
  }, [children, maxHeight]);

  useEffect(() => {
    if (expanded) {
      setClamped(false);
    } else {
      const timer = setTimeout(() => setClamped(true), 150);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const toggle = () => {
    setExpanded((prev) => !prev);
  };

  const style = {
    maxHeight: expanded ? full : collapsed,
    ...(!expanded && full > collapsed ? { '--clamp-lines': lines } : {}),
  } as CSSProperties;

  return (
    <div className={st.expandableText}>
      <div
        ref={contentRef}
        className={clsx(
          st.expandableText__text,
          clamped && full > collapsed ? st.expandableText__text_collapsed : '',
        )}
        style={style}
      >
        {children}
      </div>

      {full > collapsed && (
        <Button
          variant="ghost"
          onClick={toggle}
          className={st.expandableText__button}
        >
          {expanded ? 'Свернуть' : 'Показать ещё'}
        </Button>
      )}
    </div>
  );
}
