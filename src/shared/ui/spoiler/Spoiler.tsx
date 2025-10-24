import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import * as StyledSpoiler from './Spoiler.styled';

export interface SpoilerProps {
  children: ReactNode;
  rows?: number;
  buttonTexts?: [string, string];
}

export function Spoiler({
  children,
  rows = 3,
  buttonTexts = ['Свернуть', 'Показать'],
}: SpoilerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [minHeight, setMinHeight] = useState(0);
  const [enableTransition, setEnableTransition] = useState(false);

  useLayoutEffect(() => {
    if (!rows || !childrenRef.current) {
      return;
    }

    const textElement =
      childrenRef.current.firstElementChild || childrenRef.current;
    const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
    const calculatedMinHeight = Math.ceil(rows * lineHeight);
    const contentHeight = childrenRef.current.scrollHeight;

    setMinHeight(calculatedMinHeight);
    const overflow = contentHeight > calculatedMinHeight;
    setIsOverflowing(overflow);

    if (overflow) {
      setTimeout(() => {
        setEnableTransition(true);
      }, 0);
    }

    return () => {
      setIsOverflowing(false);
      setEnableTransition(false);
    };
  }, [children, rows]);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <StyledSpoiler.Root>
      <StyledSpoiler.Content
        $isExpanded={isCollapsed || !isOverflowing}
        $hasTransition={enableTransition}
      >
        <StyledSpoiler.ContentWrapper
          ref={wrapperRef}
          style={
            isOverflowing && minHeight ? { minHeight: `${minHeight}px` } : {}
          }
        >
          <div ref={childrenRef}>{children}</div>
        </StyledSpoiler.ContentWrapper>
      </StyledSpoiler.Content>

      {isOverflowing && (
        <StyledSpoiler.Button $variant="ghost" onClick={toggle}>
          {isCollapsed ? buttonTexts[0] : buttonTexts[1]}
        </StyledSpoiler.Button>
      )}
    </StyledSpoiler.Root>
  );
}
