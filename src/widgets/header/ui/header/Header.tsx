import s from './Header.module.scss';

import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';
import { UserControl } from '../user-control';

import { Container } from '@/shared/ui';
import { Search } from '@/features/search';

export function Header() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <NavLogo />
          <div className={s.header__inner}>
            <MainMenu />
            <Search />
          </div>
          <UserControl />
        </div>
      </Container>
    </header>
  );
}
