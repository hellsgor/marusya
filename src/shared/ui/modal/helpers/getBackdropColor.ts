import type { DefaultTheme } from 'styled-components';
import type { ModalType } from '../type';

export const getBackdropColor = (
  type: ModalType,
  theme: DefaultTheme,
  variant: 'desktop' | 'mobile' = 'desktop',
) => {
  switch (type) {
    case 'trailer':
      return variant === 'mobile'
        ? theme.colors.bg.backdrop.tailer.mobile
        : theme.colors.bg.backdrop.tailer.desktop;
    default:
      return theme.colors.bg.backdrop.default;
  }
};
