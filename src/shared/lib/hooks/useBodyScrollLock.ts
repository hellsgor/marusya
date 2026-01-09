import { useEffect, useRef } from 'react';

export function useBodyScrollLock(isLocked: boolean) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isLocked) return;

    scrollYRef.current = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const preventTouch = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const modal = document.querySelector('[data-scroll-lock-ignore]');
      if (modal && modal.contains(target)) {
        return;
      }
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventTouch, { passive: false });

    return () => {
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;

      window.scrollTo(0, scrollYRef.current);

      document.removeEventListener('touchmove', preventTouch);
    };
  }, [isLocked]);
}
