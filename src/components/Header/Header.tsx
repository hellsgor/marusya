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
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Modal } from '../../ui/Modal/Modal';
import { closeModal, openModal } from '../../store/authModalSlice';

export function Header() {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const currentAuthModal = useAppSelector((state) => state.authModal);

  const isVertTablet = useMediaQuery(BREAKPOINTS.lg);
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

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

          {isLoggedIn && (
            <MenuItem
              href="/account"
              children={isVertTablet ? <User /> : user?.name}
            />
          )}

          {!isLoggedIn && (
            <>
              <MenuItem
                onClick={() => {
                  dispatch(openModal('login'));
                }}
                children={isVertTablet ? <User /> : 'Войти'}
              />

              <Modal
                isVisible={currentAuthModal === 'login'}
                onClose={() => {
                  dispatch(closeModal());
                }}
              >
                <p>AuthForm</p>
              </Modal>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
