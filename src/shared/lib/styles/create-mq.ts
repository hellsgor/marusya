import {
  css,
  type DefaultTheme,
  type Interpolation,
  type ExecutionProps,
} from 'styled-components';

type BP = keyof DefaultTheme['breakpoints'];
type WithTheme<P> = ExecutionProps & P;

export const createMq = <P extends object = Record<string, never>>() => ({
  up:
    (bp: BP) =>
    (s: TemplateStringsArray, ...i: Interpolation<WithTheme<P>>[]) => css<
      WithTheme<P>
    >`
      @media (min-width: ${(p) => `${p.theme.breakpoints[bp]}px`}) {
        ${css(s, ...i)}
      }
    `,
  down:
    (bp: BP) =>
    (s: TemplateStringsArray, ...i: Interpolation<WithTheme<P>>[]) => css<
      WithTheme<P>
    >`
      @media (max-width: ${(p) => `${p.theme.breakpoints[bp]}px`}) {
        ${css(s, ...i)}
      }
    `,
});
