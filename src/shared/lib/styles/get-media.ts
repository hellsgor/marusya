import type { DefaultTheme } from 'styled-components';

export const getMedia = (bp: keyof DefaultTheme['breakpoints']) =>
  `@media (max-width:${({ theme }: { theme: DefaultTheme }) => theme.breakpoints[bp]}px)`;
