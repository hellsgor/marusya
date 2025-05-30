import st from './Section.module.scss';

import type { ReactNode } from 'react';
import { Container } from '../Container/Container';

export function Section({ children }: { children: ReactNode }) {
  return (
    <section className={st.section}>
      <Container>
        <div className={st.section__wrapper}>{children}</div>
      </Container>
    </section>
  );
}
