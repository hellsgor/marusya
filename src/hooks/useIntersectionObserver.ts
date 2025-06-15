import { useEffect, useRef, type MutableRefObject } from 'react';

export function useIntersectionObserver(
  ref: MutableRefObject<Element | null>,
  isLoading: boolean,
  callback: () => void,
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (isLoading) {
      return;
    }

    const cb = function (entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && !isLoading) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
          callback();
        }, 300);

        window.scrollBy({ top: -200, behavior: 'smooth' });
      }
    };

    observer.current = new IntersectionObserver(cb, { threshold: 1 });
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observer, isLoading, callback, ref]);
}
