import st from './Footer.module.scss';

import { FOOTER_SOCIAL } from '../../constants';
import { Container } from '../../ui/Container/Container';
import { memo } from 'react';
import { SocialItem } from '../../ui/SocialItem/SocialItem';

export const Footer = memo(function Footer() {
  return (
    <footer className={st.footer}>
      <Container>
        <div className={st.footer__wrapper}>
          <div className={st.footer__social}>
            {FOOTER_SOCIAL.map((item, idx) => (
              <SocialItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
});
