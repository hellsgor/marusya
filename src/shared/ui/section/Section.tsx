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
  if (!indents) return null;

  const isString = typeof indents === 'string';

  return {
    paddingTop: isString ? indents : indents[0],
    paddingBottom: isString ? indents : indents[0],
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
