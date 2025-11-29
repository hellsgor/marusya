import { useIntersectionObserver } from '@/shared/lib/hooks';
import { useEffect, useRef } from 'react';

interface useInfiniteLoadingProps {
  showMoreButtonRef: React.RefObject<HTMLButtonElement>;
  isLoading: boolean;
  handleShowMoreButtonClick: () => void;
  isSuccess: boolean;
  page: number;
  margin?: number[];
}

export function useInfiniteLoading({
  showMoreButtonRef,
  isLoading,
  handleShowMoreButtonClick,
  isSuccess,
  page,
}: useInfiniteLoadingProps) {
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useIntersectionObserver(
    showMoreButtonRef,
    isLoading,
    handleShowMoreButtonClick,
    [0, 0, -100, 0],
  );

  useEffect(() => {
    if (isSuccess && page > 1) {
      scrollTimeout.current = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }

    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isSuccess, page]);
}
