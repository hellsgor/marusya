import s from './Header.module.scss';

import { UserControl } from '@/entities/user';
import { Container } from '@/shared/ui';
import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';

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
