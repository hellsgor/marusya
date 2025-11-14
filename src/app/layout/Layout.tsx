import s from './layout.module.scss';

// import { Header } from '@/widgets/header';
// import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router';
// import * as S from './Layout.styled';
// import { Suspense } from 'react';
// import { Loader, ScrollToTop } from '@/shared/ui';
import { ScrollToTop } from '@/shared/ui';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      {/* <Header /> */}
      <main className={s.main}>
        {/* <Suspense fallback={<Loader size="big" fixed />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
      {/* <Footer /> */}
      <div id="modals"></div>
    </>
  );
}
