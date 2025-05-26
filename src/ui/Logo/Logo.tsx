import st from './Logo.module.scss';

import { memo } from 'react';
import clsx from 'clsx';
import { MarusyaText } from '../icons/';

interface LogoProps {
  theme?: 'light' | 'dark';
}

export const Logo = memo(function Logo({ theme = 'dark' }: LogoProps) {
  return (
    <div className={clsx(st.logo, st[`logo_${theme}`])}>
      <img
        className={st.logo__image}
        src="/images/marusya-image.png"
        alt="Logo"
        width={60}
        height={72}
      />
      <div className={st.logo__text}>
        <MarusyaText />
      </div>
    </div>
  );
});
