import { createMq } from '@/shared/lib';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

const mqContainer = createMq<HTMLAttributes<HTMLDivElement>>();

export const Root = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  ${mqContainer.down('xl')`
    padding: 0 40px;
  `}

  ${mqContainer.down('sm')`
    padding: 0 20px;
  `}
`;
