import type { Icon } from '@/shared/ui';
import type { ReactNode } from 'react';

export type SocialItemProps = {
  href: string;
  icon: keyof typeof Icon;
};

export type SocialItemStyled = {
  href: SocialItemProps['href'];
  children: ReactNode;
};
