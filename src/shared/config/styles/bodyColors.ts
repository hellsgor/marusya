import { css } from 'styled-components';

export const bodyColors = css`
  body {
    color: ${({ theme }) => theme.colors.content.primary};
    background-color: transparent;
    background-image:
      ${({ theme }) => theme.colors.bg.gr1},
      ${({ theme }) => theme.colors.bg.gr2},
      linear-gradient(
        ${({ theme }) => theme.colors.bg.preBlack},
        ${({ theme }) => theme.colors.bg.preBlack}
      );
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
      pointer-events: none;
      content: '';

      position: fixed;
      z-index: -1;
      inset: 0;

      background-image:
        ${({ theme }) => theme.colors.bg.gr1},
        ${({ theme }) => theme.colors.bg.gr2},
        linear-gradient(
          ${({ theme }) => theme.colors.bg.preBlack},
          ${({ theme }) => theme.colors.bg.preBlack}
        );
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
