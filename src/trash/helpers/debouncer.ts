export function debouncer<Args extends unknown[], R>(
  callee: (...args: Args) => R,
  timeoutMs: number,
): (...args: Args) => void {
  let lastCall: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: Args) => {
    const now = Date.now();
    if (lastCall && now - lastCall <= timeoutMs) {
      clearTimeout(timer);
    }
    lastCall = now;
    timer = setTimeout(() => callee(...args), timeoutMs);
  };
}
