import s from './Footer.module.scss';

import { Container } from '@/shared/ui';
import { FOOTER_SOCIAL_ITEMS } from '../../config';
import { SocialItem } from '../social-item/SocialItem';

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__wrapper}>
          <ul role="list" className={s.footer__list}>
            {FOOTER_SOCIAL_ITEMS.map((item) => (
              <li key={item.href}>
                <SocialItem {...item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
