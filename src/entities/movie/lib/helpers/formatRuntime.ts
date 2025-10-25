export function formatRuntime(runtime: number) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;

  if (!hours) {
    return `${minutes} мин`;
  }

  return `${hours} ч ${minutes} мин`;
}
