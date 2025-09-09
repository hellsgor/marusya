import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router';
import * as S from './Layout.styled';

export function Layout() {
  return (
    <>
      <Header />
      <S.StyledMain>
        <Outlet />
      </S.StyledMain>
      <Footer />
    </>
  );
}
