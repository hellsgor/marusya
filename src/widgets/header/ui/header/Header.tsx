import s from './Header.module.scss';

import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';
import { UserControl } from '../user-control';

import { Container } from '@/shared/ui';

export function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <NavLogo />
          <MainMenu />
          <UserControl />
        </div>
      </Container>
    </header>
  );
}
