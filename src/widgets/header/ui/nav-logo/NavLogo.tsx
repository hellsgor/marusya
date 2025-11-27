import s from './navLogo.module.scss';
import clsx from 'clsx';

import { Logo } from '@/shared/ui';
import { Link } from 'react-router';

export function NavLogo() {
  return (
    <Link to="/" className={clsx(s.navLogo)}>
      <Logo light />
    </Link>
  );
}
