import * as S from './Spoiler.styled';
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

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
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(true);
  const childrenWrapperRef = useRef<HTMLDivElement>(null);

  const getElements = () => {
    const wrap = childrenWrapperRef.current;
    const child = wrap?.children?.[0];
    return { wrap, child };
  };

  useLayoutEffect(() => {
    const { wrap, child } = getElements();
    if (!child) return;

    const computedChild = getComputedStyle(child);

    if (
      parseFloat(computedChild.height) <=
      parseFloat(computedChild.lineHeight) * rows
    ) {
      setIsCollapsed(null);
      return;
    }

    wrap!.style.lineHeight = computedChild.lineHeight;
  }, [rows]);

  const handleCollapsedButtonClick = () => {
    const { wrap, child } = getElements();
    if (!child || !(child instanceof HTMLElement)) return;

    if (isCollapsed === true) {
      child.style.display = 'block';
      child.style.webkitLineClamp = '';
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);

      const handleTransitionEnd = (e: Event) => {
        const transitionEvent = e as TransitionEvent;
        if (transitionEvent.propertyName === 'max-height') {
          child.style.display = '-webkit-box';
          child.style.webkitBoxOrient = 'vertical';
          child.style.webkitLineClamp = `${rows}`;
          wrap!.removeEventListener('transitionend', handleTransitionEnd);
        }
      };

      wrap!.addEventListener('transitionend', handleTransitionEnd);
    }
  };

  return (
    <S.Root>
      <S.Wrap
        $isCollapsed={isCollapsed}
        $rows={rows}
        ref={childrenWrapperRef}
        style={{ maxHeight: isCollapsed ? `${rows}lh` : '100%' }}
      >
        {children}
      </S.Wrap>
      {isCollapsed !== null && (
        <S.Button $variant="ghost" onClick={handleCollapsedButtonClick}>
          {isCollapsed ? buttonTexts[1] : buttonTexts[0]}
        </S.Button>
      )}
    </S.Root>
  );
}
