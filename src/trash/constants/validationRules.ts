import { ERRORS_TEXTS } from './errorsTexts';
import { REGS } from './regs';

export const VALIDATION_RULES = {
  required: { required: ERRORS_TEXTS.e004 },
  email: {
    required: ERRORS_TEXTS.e004,
    pattern: { value: REGS.EMAIL, message: ERRORS_TEXTS.e007 },
  },
  confirmPassword: { required: ERRORS_TEXTS.e008 },
};
