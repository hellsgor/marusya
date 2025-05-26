import type { ReactNode } from 'react';
import st from './Container.module.scss';

export function Container({ children }: { children: ReactNode }) {
  return <div className={st.container}>{children}</div>;
}
