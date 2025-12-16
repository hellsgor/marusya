import { ERRORS } from '@/shared/config';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type ApiErrorOptions = {
  /**
   * Обработка ошибки 400 Bad Request
   * По умолчанию: ERRORS.e012 (Проверьте правильность введенных данных)
   */
  on400?: string;
  /**
   * Обработка ошибки 409 Conflict
   * По умолчанию: не обрабатывается
   */
  on409?: string;
};

/**
 * Получает текст ошибки из ответа API или HTTP ошибки
 * @param error - ошибка из RTK Query mutation
 * @param data - данные ответа (может содержать error поле)
 * @param options - опции для специфичной обработки ошибок
 * @returns текст ошибки или undefined
 */
export function getApiErrorText(
  error: FetchBaseQueryError | SerializedError | undefined,
  data?: unknown,
  options?: ApiErrorOptions,
): string | undefined {
  // Ошибка из ответа сервера (data.error)
  if (
    data &&
    typeof data === 'object' &&
    data !== null &&
    'error' in data &&
    typeof data.error === 'string'
  ) {
    return data.error;
  }

  // Ошибка HTTP запроса
  if (error && 'status' in error) {
    const status = error.status;

    if (typeof status === 'number') {
      // 409 Conflict - пользователь уже существует (для регистрации)
      if (status === 409 && options?.on409) {
        return options.on409;
      }

      // 400 Bad Request - ошибки валидации
      if (status === 400) {
        return options?.on400 ?? ERRORS.e012;
      }

      // 422 Unprocessable Entity - ошибки валидации
      if (status === 422) {
        return ERRORS.e012;
      }

      // 500+ Server Error - ошибки сервера
      if (status >= 500) {
        return ERRORS.e006;
      }
    }
  }

  // Сетевые ошибки или другие ошибки
  if (error) {
    return ERRORS.e001;
  }

  return undefined;
}
