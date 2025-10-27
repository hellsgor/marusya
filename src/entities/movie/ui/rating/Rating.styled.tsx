import styled from 'styled-components';

export const StyledRoot = styled.div<{ $rate: number }>`
  display: flex;
  column-gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 4px 12px;
  border-radius: 16px;

  background-color: ${({ $rate, theme }) => {
    if ($rate < 4.5) return theme.colors.rate.red;
    if ($rate < 6.0) return theme.colors.rate.gray;
    if ($rate < 8.5) return theme.colors.rate.green;
    return theme.colors.rate.gold;
  }};

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;
