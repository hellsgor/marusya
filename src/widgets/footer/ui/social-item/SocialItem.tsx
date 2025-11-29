import s from './SocialItem.module.scss';

import { Icon } from '@/shared/ui';

type SocialItemProps = {
  href: string;
  icon: keyof typeof Icon;
};

export function SocialItem({ href, icon }: SocialItemProps) {
  const IconComponent = Icon[icon];

  return (
    <a href={href} target="_blank" className={s.socialItem}>
      <IconComponent size={36} />
    </a>
  );
}
