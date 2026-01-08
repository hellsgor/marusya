import s from './Layout.module.scss';

import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Loader, ScrollToTop } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { SignInUp } from '@/widgets/sign-in-up';

export function Layout() {
  return (
    <div className={s.layout}>
      <ScrollToTop />
      <Header />
      <main className={s.main}>
        <Suspense fallback={<Loader size="big" fixed />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <SignInUp />
    </div>
  );
}
