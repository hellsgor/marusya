import { css } from 'styled-components';

export const typography = css`
  body {
    font-family: Play, sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.333;
    color: ${({ theme }) => theme.colors.content.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: clamp(1.5rem, -1.167rem + 5.556vi, 3rem);
    line-height: clamp(2rem, -0.667rem + 5.556vi, 3.5rem);
  }

  h2 {
    font-size: clamp(1.5rem, -0.278rem + 3.704vi, 2.5rem);
    line-height: clamp(2rem, 0.222rem + 3.704vi, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 1.5rem + 0vi, 1.5rem);
    line-height: clamp(2rem, 2rem + 0vi, 2rem);
  }
`;
