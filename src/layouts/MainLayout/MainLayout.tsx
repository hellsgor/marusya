import st from './MainLayout.module.scss';

import type { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function MainLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <main className={st.content}>{children}</main>
      <Footer />
    </>
  );
}
