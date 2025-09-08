import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';
import { background } from './background';
import { fonts } from './fonts';
import { typography } from './typography';
import { root } from './root';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${background}
  ${fonts}
  ${typography}
  ${root}
`;
