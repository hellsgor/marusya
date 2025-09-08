import { Container, Logo, MenuItem } from '@/shared/ui';
import * as S from './Header.styled';

export function Header() {
  return (
    <header>
      <Container>
        <S.StyledWrapper>
          <Logo />

          <MenuItem href="javascript:void(0)" children="Войти" />
        </S.StyledWrapper>
      </Container>
    </header>
  );
}
