import { useCallback } from 'react';

export function useMergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return useCallback((instance: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(instance);
      } else {
        (ref as React.MutableRefObject<T | null>).current = instance;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
