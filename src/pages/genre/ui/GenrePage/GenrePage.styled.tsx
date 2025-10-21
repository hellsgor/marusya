import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    row-gap: 40px;
  }
`;
