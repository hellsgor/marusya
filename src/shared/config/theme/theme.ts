import { BREAKPOINTS } from './breakpoints';
import { PALETTE } from './palette';
import { transition } from './transition';

export const THEME = {
  colors: PALETTE,
  transition,
  breakpoints: BREAKPOINTS,
} as const;

export type AppTheme = typeof THEME;
