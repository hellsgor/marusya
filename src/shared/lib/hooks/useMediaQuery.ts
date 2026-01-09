import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '@/shared/config';

export function useMediaQuery(
  bp: keyof typeof BREAKPOINTS,
  isMax: boolean = true,
): boolean {
  const bpValue = BREAKPOINTS[bp];
  const query = `(${isMax ? 'max' : 'min'}-width: ${isMax ? bpValue - 1 : bpValue}px)`;

  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mql.addEventListener('change', handler);

    return () => {
      mql.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
