import { Logo } from '@/shared/ui';
import * as S from './NavLogo.styled';

export function NavLogo() {
  return (
    <S.StyledLogo to="/">
      <Logo />
    </S.StyledLogo>
  );
}
