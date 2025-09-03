import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';
import { bodyColors } from './bodyColors';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${bodyColors}
`;
