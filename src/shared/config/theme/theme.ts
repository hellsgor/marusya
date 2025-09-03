import { palette } from './palette';

export const theme = {
  colors: palette,
} as const;

export type AppTheme = typeof theme;
