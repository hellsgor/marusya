import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';
import { bodyBg } from './bodyBg';
import { fonts } from './fonts';
import { typography } from './typography';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${bodyBg}
  ${fonts}
  ${typography}
`;
