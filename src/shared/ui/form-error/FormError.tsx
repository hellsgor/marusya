import s from './FormError.module.scss';
import clsx from 'clsx';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

import { getCSSNumericValue } from '@/shared/lib';

type FormErrorProps = {
  text?: string;
  className?: string;
  textStyle?: CSSProperties;
};

export function FormError({ text, className, textStyle }: FormErrorProps) {
  const [displayError, setDisplayError] = useState(text);

  const errorWrapperRef = useRef<HTMLDivElement>(null);
  const errorTextRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !errorWrapperRef.current ||
      !errorTextRef.current ||
      !containerRef.current
    )
      return;

    if (text) {
      setDisplayError(text);
    } else {
      const container = containerRef.current;
      const wasVisible = container.classList.contains(s.formError_visible);

      if (wasVisible) {
        container.classList.remove(s.formError_visible);
        requestAnimationFrame(() => {
          const wrapperTransition =
            getCSSNumericValue({
              el: errorWrapperRef.current!,
              property: 'transitionDuration',
            }) +
            getCSSNumericValue({
              el: errorWrapperRef.current!,
              property: 'transitionDelay',
            });

          const textTransition =
            getCSSNumericValue({
              el: errorTextRef.current!,
              property: 'transitionDuration',
            }) +
            getCSSNumericValue({
              el: errorTextRef.current!,
              property: 'transitionDelay',
            });

          const delay =
            wrapperTransition > textTransition
              ? wrapperTransition
              : textTransition;

          const timer = setTimeout(() => setDisplayError(''), delay);
          return () => clearTimeout(timer);
        });
      } else {
        setDisplayError('');
      }
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        s.formError,
        className,
        displayError && s.formError_visible,
      )}
    >
      <div ref={errorWrapperRef}>
        <span ref={errorTextRef} style={{ ...textStyle }}>
          {displayError ?? ''}
        </span>
      </div>
    </div>
  );
}
