import type { ComponentType, SVGProps } from 'react';
import st from './SocialItem.module.scss';

interface SocialItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

export function SocialItem({ icon: Icon, href }: SocialItemProps) {
  return (
    <a className={st.socialItem} href={href}>
      <Icon />
    </a>
  );
}
