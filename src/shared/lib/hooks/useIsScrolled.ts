import { useEffect, useRef, useState } from 'react';

export function useIsScrolled(hideValue: number, intermediateValue: number) {
  const prevScroll = useRef(0);
  const negativeScrollAcc = useRef(0);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY >= hideValue);
    prevScroll.current = window.scrollY;

    let rafId: number | null = null;
    let isScheduled = false;

    const handleScroll = () => {
      if (isScheduled) return;

      isScheduled = true;

      rafId = requestAnimationFrame(() => {
        const delta = window.scrollY - prevScroll.current;
        prevScroll.current = window.scrollY;

        negativeScrollAcc.current =
          delta < 0 ? negativeScrollAcc.current + delta : 0;

        const shouldBeHidden =
          window.scrollY >= hideValue &&
          negativeScrollAcc.current >= intermediateValue;

        setIsScrolled((prev) =>
          prev !== shouldBeHidden ? shouldBeHidden : prev,
        );
        isScheduled = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [hideValue, intermediateValue]);

  return isScrolled;
}
