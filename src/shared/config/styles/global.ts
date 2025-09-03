import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';
import { bodyBg } from './bodyBg';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${bodyBg}
`;
