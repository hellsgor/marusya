import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
  display: flex;
  column-gap: 80px;
  justify-content: flex-end;
  padding: 40px 0;
`;

export const StyledSocialsList = styled.ul<HTMLAttributes<HTMLUListElement>>`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;
