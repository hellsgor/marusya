import s from './Section.module.scss';

import type { ReactNode } from 'react';
import { Container } from '../container';
import clsx from 'clsx';

export type SectionProps = {
  className?: string;
  children: ReactNode;
  indents?: string | [string, string];
};

const paddings = (indents: SectionProps['indents']) => {
  if (!indents) return {};
  return {
    paddingTop: indents[0] ?? indents,
    paddingBottom: indents[1] ?? indents[0] ?? indents,
  };
};

export function Section({ className, children, indents }: SectionProps) {
  return (
    <section
      className={clsx(s.section, className)}
      style={{ ...paddings(indents) }}
    >
      <Container>
        <div className={s.section__wrapper}>{children}</div>
      </Container>
    </section>
  );
}
