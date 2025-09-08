import { Container, Icon, Logo, MenuItem } from '@/shared/ui';
import * as S from './Header.styled';
import { MainMenu } from '../main-menu';
import { useMediaQuery } from '@/shared/lib';

export function Header() {
  const isIconViewed = useMediaQuery('lg');

  return (
    <header>
      <Container>
        <S.StyledWrapper>
          <S.StyledLogo to="/">
            <Logo />
          </S.StyledLogo>
          <MainMenu />
          <MenuItem
            href="some"
            children={isIconViewed ? <Icon.User /> : 'Войти'}
          />
        </S.StyledWrapper>
      </Container>
    </header>
  );
}
