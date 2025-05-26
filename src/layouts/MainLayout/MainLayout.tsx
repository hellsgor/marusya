import st from './MainLayout.module.scss';

import type { FC, ReactNode } from 'react';

import { useLayoutEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { APP_NAME } from '../../constants';

interface MainLayoutProps {
  children?: ReactNode;
  title: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  useLayoutEffect(() => {
    document.title = `${APP_NAME} – ${title}`;
  }, [title]);

  return (
    <>
      <Header />
      <main className={st.content}>{children}</main>
      <Footer />
    </>
  );
};
