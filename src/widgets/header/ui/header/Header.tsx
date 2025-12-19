import s from './Header.module.scss';

import { Container, Icon, MenuItem } from '@/shared/ui';
import { MainMenu } from '../main-menu';
import { useAppDispatch, useMediaQuery } from '@/shared/lib';
import { NavLogo } from '../nav-logo';
import { openModal } from '@/features/modal';

export function Header() {
  const isIconViewed = useMediaQuery('lg');
  const dispatch = useAppDispatch();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__wrapper}>
          <NavLogo />
          <MainMenu />
          <MenuItem
            children={isIconViewed ? <Icon.User /> : 'Войти'}
            onClick={() => {
              dispatch(openModal('signIn'));
            }}
          />
        </div>
      </Container>
    </header>
  );
}
