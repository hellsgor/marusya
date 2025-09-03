import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';
import { bodyBg } from './bodyBg';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${bodyBg}
  ${fonts}
`;
