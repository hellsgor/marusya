import type { ReactNode } from 'react';
import { Header } from '../../components/Header/Header';

export function PublicLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
