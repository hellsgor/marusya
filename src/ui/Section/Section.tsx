import st from './Section.module.scss';

import type { ReactNode } from 'react';
import { Container } from '../Container/Container';
import clsx from 'clsx';

export function Section({
  children,
  indentsClasses,
}: {
  children: ReactNode;
  indentsClasses?: string;
}) {
  return (
    <section className={st.section}>
      <Container>
        <div className={clsx(st.section__wrapper, indentsClasses)}>
          {children}
        </div>
      </Container>
    </section>
  );
}
