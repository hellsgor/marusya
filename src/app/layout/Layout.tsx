import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router';
import * as S from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui';

export function Layout() {
  return (
    <>
      <Header />
      <S.StyledMain>
        <Suspense fallback={<Loader size="big" fixed />}>
          <Outlet />
        </Suspense>
      </S.StyledMain>
      <Footer />
    </>
  );
}
