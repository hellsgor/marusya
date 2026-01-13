import s from './Logo.module.scss';
import clsx from 'clsx';

import { Icon } from '@/shared/ui/icon';

type LogoProps = {
  light?: true;
  headerUsage?: true;
  className?: string;
};

export function Logo({ light, headerUsage, className }: LogoProps) {
  return (
    <div
      className={clsx(
        s.logo,
        light && s.logo_light,
        headerUsage && s.logo_header,
        className,
      )}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/marusya-image.png`}
        alt="Marusya logo image"
      />
      <Icon.MarusyaText className={s.logo__text} />
    </div>
  );
}
