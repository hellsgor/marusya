import { useEffect, useRef, type MutableRefObject } from 'react';

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  isLoading: boolean,
  callback: () => void,
  margin?: number[],
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (isLoading) {
      return;
    }

    const cb = function (entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && !isLoading) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb, {
      threshold: 1,
      rootMargin: margin?.map((m) => `${m}px`).join(' ') || undefined,
    });
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observer, isLoading, callback, ref, margin]);
}
