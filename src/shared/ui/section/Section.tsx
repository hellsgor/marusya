import s from './Section.module.scss';

import type { CSSProperties, ReactNode } from 'react';
import { Container } from '../container';
import clsx from 'clsx';

export type SectionProps = {
  className?: string;
  children: ReactNode;
  indents?: string | [string, string];
  style?: CSSProperties;
};

const paddings = (indents: SectionProps['indents']) => {
  if (!indents) return null;

  const isString = typeof indents === 'string';

  return {
    paddingTop: isString ? indents : indents[0],
    paddingBottom: isString ? indents : indents[1],
  };
};

export function Section({ className, children, indents, style }: SectionProps) {
  return (
    <section
      className={clsx(s.section, className)}
      style={{ ...paddings(indents), ...style }}
    >
      <Container>
        <div className={s.section__wrapper}>{children}</div>
      </Container>
    </section>
  );
}
