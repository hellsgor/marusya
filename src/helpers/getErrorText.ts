import { ERRORS_TEXTS } from '../constants';

export function getErrorText(key: keyof typeof ERRORS_TEXTS) {
  return ERRORS_TEXTS[key];
}
