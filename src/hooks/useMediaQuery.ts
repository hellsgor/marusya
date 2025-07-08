import { useEffect, useState } from 'react';
import type { BREAKPOINTS } from '../constants';

export function useMediaQuery(
  bp: (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS],
  isMax: boolean = true,
): boolean {
  const query = `(${isMax ? 'max' : 'min'}-width: ${isMax ? bp - 1 : bp}px)`;

  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mql.addEventListener('change', handler);

    return () => {
      mql.addEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
