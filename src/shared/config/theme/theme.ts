import { BREAKPOINTS } from './breakpoints';
import { palette } from './palette';
import { transition } from './transition';

export const theme = {
  colors: palette,
  transition,
  breakpoints: BREAKPOINTS,
} as const;

export type AppTheme = typeof theme;
