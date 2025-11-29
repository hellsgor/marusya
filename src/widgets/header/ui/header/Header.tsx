import s from './Header.module.scss';

import { Container, Icon, MenuItem } from '@/shared/ui';
import { MainMenu } from '../main-menu';
import { useMediaQuery } from '@/shared/lib';
import { NavLogo } from '../nav-logo';

export function Header() {
  const isIconViewed = useMediaQuery('lg');

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <NavLogo />
          <MainMenu />
          <MenuItem
            href="some"
            children={isIconViewed ? <Icon.User /> : 'Войти'}
          />
        </div>
      </Container>
    </header>
  );
}
