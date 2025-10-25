import styled from 'styled-components';

export const Root = styled.div<{ $isTopIndent: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  width: 100%;
  max-width: 320px;
  ${({ $isTopIndent }) => $isTopIndent && 'padding-top: 88px'};

  p {
    text-align: center;
  }
`;

export const Backdrop = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;

  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent.active};
`;
