import type { LogoProps, StyledLogoProps } from './types';
import type { ImgHTMLAttributes } from 'react';

import styled from 'styled-components';
import { Icon } from '@/shared/ui/icon';
import { createMq } from '@/shared/lib';

const mqLogo = createMq<LogoProps>();
const mqLogoImage = createMq<ImgHTMLAttributes<HTMLImageElement>>();

export const LogoImage = styled.img`
  align-self: center;
  width: auto;
  height: 40px;

  ${mqLogoImage.down('md')`
    height: 22px;
  `}
`;

export const LogoTextIcon = styled(Icon.MarusyaText)`
  position: relative;
  top: 36%;

  display: flex;
  justify-content: center;

  aspect-ratio: calc(174.074 / 36.75);
  width: auto;
  height: 65.6%;
`;

export const StyledLogo = styled.div<StyledLogoProps>`
  display: flex;
  column-gap: 4.98%;
  justify-content: flex-end;

  aspect-ratio: calc(251 / 56);
  width: auto;
  height: 32px;
  overflow: hidden;

  ${({ theme, $logoTheme }) =>
    $logoTheme === 'light' &&
    `
    color: ${theme.colors.content.primary};
  `}

  ${({ theme, $logoTheme }) =>
    $logoTheme === 'dark' &&
    `
    color: ${theme.colors.content.black};
  `}

  ${mqLogo.down('md')`
    height: 18px;
  `};
`;
