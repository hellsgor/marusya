import styled from 'styled-components';

const propertyIndent = 8;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    row-gap: 40px;
  }
`;

export const PropertiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Property = styled.div`
  display: flex;
  column-gap: ${propertyIndent}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
    row-gap: 4px;
  }
`;

export const PropertyKey = styled.span`
  display: flex;
  flex-wrap: nowrap;
  column-gap: ${propertyIndent}px;
  align-items: flex-end;

  width: 320px;

  white-space: nowrap;

  &::after {
    content: '';

    flex: 1;

    height: 1rem;

    background: repeating-linear-gradient(
      to right,
      ${({ theme }) => theme.colors.content.disabled} 0,
      ${({ theme }) => theme.colors.content.disabled} 2px,
      transparent 2px,
      transparent 6px
    );
    background-repeat: repeat-x;
    background-position: bottom 0.25em left 0;
    background-size: 6px 1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 14px;
    line-height: 1.4286;
    color: ${({ theme }) => theme.colors.content.disabled};

    &::after {
      content: none;
    }
  }
`;
