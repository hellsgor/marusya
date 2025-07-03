import st from './Header.module.scss';

import { BREAKPOINTS, MAIN_MENU_ITEMS } from '../../constants';

import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { MainNavMenu } from '../MainNavMenu/MainNavMenu';
import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { Search } from '../Search/Search';
import { NavLink } from 'react-router';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Header() {
  const isMobile = useMediaQuery(BREAKPOINTS.md);
  console.log('header is mobile', isMobile);

  return (
    <header className={st.header}>
      <Container>
        <div className={st.header__wrapper}>
          <NavLink to={'/'}>
            <Logo theme={'light'} />
          </NavLink>
          <div className={st.header__center}>
            <MainNavMenu items={MAIN_MENU_ITEMS} className={st.header__menu} />
            <Search />
          </div>
          <MenuItem
            onClick={() => {
              console.log('click');
            }}
            children={'Войти'}
          />
        </div>
      </Container>
    </header>
  );
}
