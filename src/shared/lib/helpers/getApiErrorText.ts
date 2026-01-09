import { ERRORS } from '@/shared/config';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type ApiErrorOptions = {
  /**
   * Handle 400 Bad Request error
   * Default: ERRORS.e012 (Please check your input data)
   */
  on400?: string;
  /**
   * Handle 409 Conflict error
   * Default: not handled
   */
  on409?: string;
};

/**
 * Gets error text from API response or HTTP error
 * @param error - error from RTK Query mutation
 * @param data - response data (may contain error field)
 * @param options - options for specific error handling
 * @returns error text or undefined
 */
export function getApiErrorText(
  error: FetchBaseQueryError | SerializedError | undefined,
  data?: unknown,
  options?: ApiErrorOptions,
): string | undefined {
  // Error from server response (data.error)
  if (
    data &&
    typeof data === 'object' &&
    data !== null &&
    'error' in data &&
    typeof data.error === 'string'
  ) {
    return data.error;
  }

  // HTTP request error
  if (error && 'status' in error) {
    const status = error.status;

    if (typeof status === 'number') {
      // 409 Conflict - user already exists (for registration)
      if (status === 409 && options?.on409) {
        return options.on409;
      }

      // 400 Bad Request - validation errors
      if (status === 400) {
        return options?.on400 ?? ERRORS.e012;
      }

      // 422 Unprocessable Entity - validation errors
      if (status === 422) {
        return ERRORS.e012;
      }

      // 500+ Server Error - server errors
      if (status >= 500) {
        return ERRORS.e006;
      }
    }
  }

  // Network errors or other errors
  if (error) {
    return ERRORS.e001;
  }

  return undefined;
}
