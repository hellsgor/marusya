import st from './Logo.module.scss';

import { memo } from 'react';
import clsx from 'clsx';
import { MarusyaText } from '../icons/';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo = memo(function Logo({
  theme = 'dark',
  className,
}: LogoProps) {
  return (
    <div className={clsx(st.logo, st[`logo_${theme}`], className)}>
      <img
        className={st.logo__image}
        src="/images/marusya-image.png"
        alt="Logo"
      />
      <div className={st.logo__text}>
        <MarusyaText />
      </div>
    </div>
  );
});
