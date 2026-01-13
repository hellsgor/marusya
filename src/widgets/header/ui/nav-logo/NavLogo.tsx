import s from './NavLogo.module.scss';

import { Logo } from '@/shared/ui';
import { Link } from 'react-router';

export function NavLogo() {
  return (
    <Link to="/" className={s.navLogo}>
      <Logo light />
    </Link>
  );
}
