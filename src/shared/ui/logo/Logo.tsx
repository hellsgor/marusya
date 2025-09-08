import * as S from './Logo.styled';
import type { LogoProps } from './types';

export function Logo(props: LogoProps) {
  return (
    <S.StyledLogo {...props} $logoTheme={props.logoTheme || 'light'}>
      <S.LogoImage src="/images/marusya-image.png" alt="Marusya logo image" />
      <S.LogoTextIcon />
    </S.StyledLogo>
  );
}
