import st from './MainLayout.module.scss';

import type { FC, ReactNode } from 'react';

import { useLayoutEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { APP_NAME } from '../../constants';
import { useParams } from 'react-router';

interface MainLayoutProps {
  children: ReactNode;
  /* eslint-disable-next-line */
  title: string | ((_: string) => string);
}

export const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  const params = useParams();
  const paramsValue = params ? (Object.values(params)[0] ?? '') : '';

  useLayoutEffect(() => {
    document.title = `${APP_NAME} – ${typeof title === 'function' ? title(paramsValue) : title}`;
  }, [title, paramsValue]);

  return (
    <>
      <Header />
      <main className={st.content}>{children}</main>
      <Footer />
    </>
  );
};
