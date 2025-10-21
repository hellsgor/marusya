import styled, { keyframes } from 'styled-components';

const shimmerFull = keyframes`
  from {
    background-position: 150% 150%;
  }
  to {
    background-position: -100% -100%;
  }
`;

export const StyledPoster = styled.div`
  will-change: background-position;

  position: relative;

  overflow: hidden;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.bg.gray};
  background-image: ${({ theme }) => `linear-gradient(
    135deg,
    ${theme.colors.bg.gray} 0%,
    ${theme.colors.bg.gray} 25%,
    rgb(255 255 255 / 20%) 50%,
    ${theme.colors.bg.gray} 75%,
    ${theme.colors.bg.gray} 100%
  )`};
  background-repeat: no-repeat;
  background-size: 200% 200%;

  animation: ${shimmerFull} 2s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;

    opacity: 0;
    object-fit: cover;
    object-position: center;

    transition: opacity 0.3s ease-in;
  }

  &[data-loaded='true'] {
    background-color: transparent;
    background-image: none;
    animation: none;

    img {
      opacity: 1;
    }
  }
`;
