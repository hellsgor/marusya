import { ERRORS_TEXTS } from '../constants';

export function getServerErrorKey(
  statusCode: number,
): keyof typeof ERRORS_TEXTS {
  if (statusCode === 401 || statusCode === 403) return 'e005';
  if (statusCode === 404) return 'e003';
  if (statusCode >= 500) return 'e006';
  return 'e001';
}
