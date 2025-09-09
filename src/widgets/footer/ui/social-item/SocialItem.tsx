import { Icon } from '@/shared/ui';
import * as S from './SocialItem.styled';
import type { SocialItemProps } from './types';

export function SocialItem({ href, icon }: SocialItemProps) {
  const IconComponent = Icon[icon];

  return (
    <S.Root href={href}>
      <IconComponent size={36} />
    </S.Root>
  );
}
