import { Header } from '@/widgets/header';
import { Outlet } from 'react-router';
import * as S from './Layout.styled';

export function Layout() {
  return (
    <>
      <Header />
      <S.StyledMain>
        <Outlet />
      </S.StyledMain>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
