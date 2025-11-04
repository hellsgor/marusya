import * as S from './Logo.styled';
import type { LogoProps } from './types';

export function Logo(props: LogoProps) {
  const { logoTheme, ...restProps } = props;
  return (
    <S.StyledLogo {...restProps} $logoTheme={logoTheme || 'dark'}>
      <S.LogoImage src="/images/marusya-image.png" alt="Marusya logo image" />
      <S.LogoTextIcon />
    </S.StyledLogo>
  );
}
