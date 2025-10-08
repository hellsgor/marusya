import styled from 'styled-components';
import type { radius } from './types';

export const StyledCard = styled.div<{ $radius: radius }>`
  overflow: hidden;

  width: 100%;
  height: 100%;
  border-radius: ${({ $radius }) => ($radius === 'small' ? '16px' : '24px')};

  box-shadow: 0 0 80px 0 rgb(255 255 255 / 33%);
`;
