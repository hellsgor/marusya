import styled from 'styled-components';

type StyledSectionProps = {
  $indents?: string | [string, string];
};

export const StyledSection = styled.section<StyledSectionProps>`
  ${({ $indents }) => {
    if (!$indents) return '';

    if (Array.isArray($indents)) {
      return `
      padding-top: ${$indents[0]};
      padding-bottom: ${$indents[1] || $indents[0]};
    `;
    } else {
      return `
        padding-top: ${$indents};
        padding-bottom: ${$indents};
      `;
    }
  }};
`;

export const StyledSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;
`;
