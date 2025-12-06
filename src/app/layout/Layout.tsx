import s from './Layout.module.scss';

import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Loader, ScrollToTop } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={s.main}>
        <Suspense fallback={<Loader size="big" fixed />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
