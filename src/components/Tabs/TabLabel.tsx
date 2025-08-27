import type { ReactNode } from 'react';

interface TabLabelProps {
  isCompact: boolean;
  icon?: ReactNode;
  long: string;
  short?: string;
}

export function TabLabel({ isCompact, icon, long, short }: TabLabelProps) {
  return (
    <>
      {icon ?? null}
      <span>{isCompact ? short || long : long}</span>
    </>
  );
}
