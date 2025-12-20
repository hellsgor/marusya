import s from './Header.module.scss';

import { Container } from '@/shared/ui';
import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';
import { UserControl } from '@/entities/user';

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
