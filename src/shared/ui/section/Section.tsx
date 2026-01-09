import s from './Section.module.scss';
import clsx from 'clsx';

import type { CSSProperties, ReactNode } from 'react';

import { Container } from '@/shared/ui/container';

type SectionProps = {
  className?: string;
  children: ReactNode;
  indents?: string | [string, string];
  style?: CSSProperties;
  wrapperGap?: string;
};

const paddings = (indents: SectionProps['indents']) => {
  if (!indents) return null;

  const isString = typeof indents === 'string';

  return {
    paddingTop: isString ? indents : indents[0],
    paddingBottom: isString ? indents : indents[1],
  };
};

const gap = (gap: SectionProps['wrapperGap']) => {
  if (!gap) return null;

  return { rowGap: gap };
};

export function Section({
  className,
  children,
  indents,
  wrapperGap,
  style,
}: SectionProps) {
  return (
    <section
      className={clsx(s.section, className)}
      style={{ ...paddings(indents), ...style }}
    >
      <Container>
        <div className={s.section__wrapper} style={{ ...gap(wrapperGap) }}>
          {children}
        </div>
      </Container>
    </section>
  );
}
