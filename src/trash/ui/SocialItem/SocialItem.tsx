import type { ComponentType, SVGProps } from 'react';
import st from './SocialItem.module.scss';
import { Link } from 'react-router';

interface SocialItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

export function SocialItem({ icon: Icon, href }: SocialItemProps) {
  return (
    <Link className={st.socialItem} to={href} target={'_blank'}>
      <Icon />
    </Link>
  );
}
