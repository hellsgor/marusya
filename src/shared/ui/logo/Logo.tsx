import s from './Logo.module.scss';
import clsx from 'clsx';

import { Icon } from '../icon';

type LogoProps = {
  light?: true;
  className?: string;
};

export function Logo({ light, className }: LogoProps) {
  return (
    <div className={clsx(s.logo, light && s.logo_light, className)}>
      <img src="/images/marusya-image.png" alt="Marusya logo image" />
      <Icon.MarusyaText className={s.logo__text} />
    </div>
  );
}
