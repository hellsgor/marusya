import * as S from './Header.styled';
import { Container, Icon, MenuItem } from '@/shared/ui';
import { MainMenu } from '../main-menu';
import { useMediaQuery } from '@/shared/lib';
import { NavLogo } from '../nav-logo';

export function Header() {
  const isIconViewed = useMediaQuery('lg');

  return (
    <S.StyledHeader>
      <Container>
        <S.StyledWrapper>
          <NavLogo />
          <MainMenu />
          <MenuItem
            href="some"
            children={isIconViewed ? <Icon.User /> : 'Войти'}
          />
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}
