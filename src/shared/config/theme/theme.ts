import { palette } from './palette';
import { transition } from './transition';

export const theme = {
  colors: palette,
  transition,
} as const;

export type AppTheme = typeof theme;
