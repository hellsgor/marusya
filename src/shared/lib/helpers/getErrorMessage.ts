export function getErrorMessage(
  error: unknown,
  customErrorText: string,
): string | undefined {
  if (!error) return undefined;

  if (typeof error === 'object' && error !== null) {
    // FetchBaseQueryError
    if ('status' in error && 'data' in error) {
      if (typeof error.data === 'string') return error.data;
      if (
        typeof error.data === 'object' &&
        error.data !== null &&
        'message' in error.data
      ) {
        return String(error.data.message);
      }
    }
    // SerializedError
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
  }

  return customErrorText;
}
