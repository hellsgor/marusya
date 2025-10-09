import styled from 'styled-components';

const columnGapPx = 40;
const rowItemsCount = 4;

export const StyledGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px ${columnGapPx + 'px'};
  justify-content: space-between;

  & > * {
    flex: 1 1
      calc((100% - ${columnGapPx * (rowItemsCount - 1)}px) / ${rowItemsCount});
    min-width: 280px;
    height: 304px;
  }
`;
