import s from './Header.module.scss';
import clsx from 'clsx';

import type { SearchControlRef } from '@/features/search';

import { useEffect, useRef } from 'react';

import { HIDE_HEADER_SCROLL_VALUE, SHOW_HEADER_SCROLL_BY } from '../../config';
import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';
import { UserControl } from '../user-control';

import { Search } from '@/features/search';

import { useIsScrolled } from '@/shared/lib';
import { Container } from '@/shared/ui';

export function Header() {
  const isScrolled = useIsScrolled(
    HIDE_HEADER_SCROLL_VALUE,
    SHOW_HEADER_SCROLL_BY,
  );

  const searchRef = useRef<SearchControlRef>(null);

  useEffect(() => {
    if (isScrolled && searchRef.current) {
      searchRef.current.blur();
      searchRef.current.close();
    }
  }, [isScrolled]);

  return (
    <header className={clsx(s.header, isScrolled && s.header_hidden)}>
      <Container>
        <div className={s.header__wrapper}>
          <NavLogo />
          <div className={s.header__inner}>
            <MainMenu />
            <Search ref={searchRef} />
          </div>
          <UserControl />
        </div>
      </Container>
    </header>
  );
}
