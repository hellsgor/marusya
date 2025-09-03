import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
`;
