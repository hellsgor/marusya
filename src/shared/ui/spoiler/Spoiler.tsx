import * as S from './Spoiler.styled';
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

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
  const [maxHeight, setMaxHeight] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fullHeightRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const getChild = () =>
    wrapperRef.current?.children?.[0] as HTMLElement | undefined;

  const measureLineHeight = (element: HTMLElement): number => {
    const computed = getComputedStyle(element);
    const tempSpan = document.createElement('span');
    tempSpan.style.cssText = `
      visibility: hidden;
      position: absolute;
      top: -9999px;
      left: -9999px;
      font-size: ${computed.fontSize};
      font-family: ${computed.fontFamily};
      font-weight: ${computed.fontWeight};
      letter-spacing: ${computed.letterSpacing};
    `;
    tempSpan.textContent = 'M';
    document.body.appendChild(tempSpan);
    const height = tempSpan.getBoundingClientRect().height;
    document.body.removeChild(tempSpan);
    return height;
  };

  const getFullHeight = (child: HTMLElement): number => {
    const computed = getComputedStyle(child);
    const isClamped =
      child.style.webkitLineClamp !== '' || computed.webkitLineClamp !== 'none';

    if (isClamped) {
      const originalDisplay = child.style.display;
      const originalLineClamp = child.style.webkitLineClamp;
      const originalBoxOrient = child.style.webkitBoxOrient;

      child.style.display = 'block';
      child.style.webkitLineClamp = '';
      child.style.webkitBoxOrient = '';
      void child.offsetHeight;

      const height = child.offsetHeight;

      child.style.display = originalDisplay;
      child.style.webkitLineClamp = originalLineClamp;
      child.style.webkitBoxOrient = originalBoxOrient;

      return height;
    }

    return parseFloat(computed.height);
  };

  const applyClampStyles = useCallback(
    (child: HTMLElement, shouldClamp: boolean) => {
      if (shouldClamp) {
        child.style.display = '-webkit-box';
        child.style.webkitBoxOrient = 'vertical';
        child.style.webkitLineClamp = `${rows}`;
      } else {
        child.style.display = 'block';
        child.style.webkitLineClamp = '';
        child.style.webkitBoxOrient = '';
      }
    },
    [rows],
  );

  const updateStyles = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const wrapper = wrapperRef.current;
        const child = getChild();
        if (!child || !wrapper) return;

        const lineHeight = measureLineHeight(child);
        const fullHeight = getFullHeight(child);
        const collapsedHeight = lineHeight * rows;

        fullHeightRef.current = fullHeight;

        if (wrapper.style.lineHeight !== `${lineHeight}px`) {
          wrapper.style.lineHeight = `${lineHeight}px`;
        }

        if (fullHeight <= collapsedHeight) {
          if (isCollapsed !== null) {
            setIsCollapsed(null);
            setMaxHeight(null);
          }
          return;
        }

        if (isCollapsed === null) {
          setIsCollapsed(true);
        }

        const targetHeight =
          isCollapsed === true ? collapsedHeight : fullHeight;
        setMaxHeight(`${targetHeight}px`);
      });
    });
  }, [rows, isCollapsed]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const child = getChild();
    if (!child || !wrapper) return;

    updateStyles();

    const resizeObserver = new ResizeObserver(updateStyles);
    resizeObserver.observe(wrapper);
    resizeObserver.observe(child);
    window.addEventListener('resize', updateStyles);

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'max-height' && isCollapsed === true) {
        applyClampStyles(child, true);
      }
    };

    wrapper.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateStyles);
      wrapper.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [rows, isCollapsed, updateStyles, applyClampStyles]);

  useLayoutEffect(() => {
    const child = getChild();
    if (!child) return;

    if (isCollapsed === false) {
      applyClampStyles(child, false);
    } else if (
      isCollapsed === true &&
      (!maxHeight || maxHeight.includes('lh'))
    ) {
      applyClampStyles(child, true);
    }
  }, [isCollapsed, rows, maxHeight, applyClampStyles]);

  const handleToggle = () => {
    const wrapper = wrapperRef.current;
    const child = getChild();
    if (!child || !wrapper) return;

    if (isCollapsed === true) {
      applyClampStyles(child, false);
      const targetHeight = fullHeightRef.current ?? getFullHeight(child);
      setMaxHeight(`${targetHeight}px`);
      setIsCollapsed(false);
    } else {
      const currentHeight = parseFloat(getComputedStyle(child).height);
      if (currentHeight > 0) {
        fullHeightRef.current = currentHeight;
      }

      const lineHeight = parseFloat(wrapper.style.lineHeight || '0');
      const collapsedHeight = lineHeight * rows;

      setMaxHeight(`${currentHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeight(`${collapsedHeight}px`);
          setIsCollapsed(true);
        });
      });

      const handleTransitionEnd = (e: Event) => {
        const transitionEvent = e as TransitionEvent;
        if (transitionEvent.propertyName === 'max-height') {
          applyClampStyles(child, true);
          wrapper.removeEventListener('transitionend', handleTransitionEnd);
        }
      };

      wrapper.addEventListener('transitionend', handleTransitionEnd);
    }
  };

  return (
    <S.Root>
      <S.Wrap
        $isCollapsed={isCollapsed}
        $rows={rows}
        ref={wrapperRef}
        style={{
          maxHeight:
            isCollapsed === null
              ? 'unset'
              : (maxHeight ?? (isCollapsed ? `${rows}lh` : '100%')),
        }}
      >
        {children}
      </S.Wrap>
      {isCollapsed !== null && (
        <S.Button $variant="ghost" onClick={handleToggle}>
          {isCollapsed ? buttonTexts[1] : buttonTexts[0]}
        </S.Button>
      )}
    </S.Root>
  );
}
