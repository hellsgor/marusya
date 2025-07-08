import st from './Header.module.scss';

import { BREAKPOINTS } from '../../constants';

import { Container } from '../../ui/Container/Container';
import { Logo } from '../../ui/Logo/Logo';
import { MainNavMenu } from '../MainNavMenu/MainNavMenu';
import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { Search } from '../Search/Search';
import { NavLink, useLocation } from 'react-router';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { User } from '../../ui/icons';

export function Header() {
  const isVertTablet = useMediaQuery(BREAKPOINTS.lg);
  const { pathname } = useLocation();

  return (
    <header className={st.header}>
      <Container>
        <div className={st.header__wrapper}>
          <NavLink to={'/'}>
            <Logo theme={'light'} />
          </NavLink>
          <div className={st.header__center}>
            <MainNavMenu
              pathname={pathname}
              isVertTablet={isVertTablet}
              className={st.header__menu}
            />
            <Search />
          </div>
          <MenuItem
            onClick={() => {
              console.log('click');
            }}
            children={isVertTablet ? <User /> : 'Войти'}
          />
        </div>
      </Container>
    </header>
  );
}
