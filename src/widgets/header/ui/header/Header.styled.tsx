import { createMq } from '@/shared/lib';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

const mqWrapper = createMq<HTMLAttributes<HTMLDivElement>>();

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  column-gap: 80px;

  ${mqWrapper.down('md')`
    column-gap: 20px;
    padding: 16px 0;
  `}
`;
