import styled from 'styled-components';
import { StyledButton } from '@/shared/ui/button';

export const StyledBackTitleBar = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.colors.content.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    column-gap: 8px;
  }
`;

export const StyledBut = styled(StyledButton)`
  aspect-ratio: 1/1;
  width: 40px;
  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 32px;
  }
`;
