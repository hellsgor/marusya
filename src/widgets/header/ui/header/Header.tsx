import { Container, Logo, MenuItem } from '@/shared/ui';
import * as S from './Header.styled';
import { MainMenu } from '../main-menu';

export function Header() {
  return (
    <header>
      <Container>
        <S.StyledWrapper>
          <Logo />
          <MainMenu />
          <MenuItem href="some" children="Войти" />
        </S.StyledWrapper>
      </Container>
    </header>
  );
}
