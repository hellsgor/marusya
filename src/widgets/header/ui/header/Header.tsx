import s from './Header.module.scss';
import clsx from 'clsx';

import { HIDE_HEADER_SCROLL_VALUE, SHOW_HEADER_SCROLL_BY } from '../../config';
import { MainMenu } from '../main-menu';
import { NavLogo } from '../nav-logo';
import { UserControl } from '../user-control';
import { Search } from '@/features/search';

import { useIsScrolled } from '@/shared/lib';
import { Container } from '@/shared/ui';

export function Header() {
  // const prevScroll = useRef(0);
  // const negativeScrollAcc = useRef(0);

  // const [isScrolled, setIsScrolled] = useState(false);

  // useLayoutEffect(() => {
  //   setIsScrolled(window.scrollY >= HIDE_HEADER_SCROLL_VALUE);
  //   prevScroll.current = window.scrollY;

  //   let rafId: number | null = null;
  //   let isScheduled = false;

  //   const handleScroll = () => {
  //     if (isScheduled) return;

  //     isScheduled = true;

  //     rafId = requestAnimationFrame(() => {
  //       const delta = window.scrollY - prevScroll.current;
  //       prevScroll.current = window.scrollY;

  //       negativeScrollAcc.current =
  //         delta < 0 ? negativeScrollAcc.current + delta : 0;

  //       const shouldBeHidden =
  //         window.scrollY >= HIDE_HEADER_SCROLL_VALUE &&
  //         negativeScrollAcc.current >= SHOW_HEADER_SCROLL_BY;

  //       setIsScrolled(shouldBeHidden);
  //       isScheduled = false;
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     if (rafId !== null) cancelAnimationFrame(rafId);
  //   };
  // }, []);

  const isScrolled = useIsScrolled(
    HIDE_HEADER_SCROLL_VALUE,
    SHOW_HEADER_SCROLL_BY,
  );

  return (
    <header className={clsx(s.header, isScrolled && s.header_hidden)}>
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
