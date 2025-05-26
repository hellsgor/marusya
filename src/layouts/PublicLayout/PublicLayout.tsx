import st from './PublicLayout.module.scss';

import type { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function PublicLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <main className={st.content}>{children}</main>
      <Footer />
    </>
  );
}
