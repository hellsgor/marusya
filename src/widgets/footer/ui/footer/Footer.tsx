import { Container } from '@/shared/ui';
import * as S from './Footer.styled';
import { FOOTER_SOCIAL_ITEMS } from '../../config';
import { SocialItem } from '../social-item/SocialItem';

export function Footer() {
  return (
    <footer>
      <Container>
        <S.StyledFooterWrapper>
          <S.StyledSocialsList role="list">
            {FOOTER_SOCIAL_ITEMS.map((item) => (
              <li key={item.href}>
                <SocialItem {...item} />
              </li>
            ))}
          </S.StyledSocialsList>
        </S.StyledFooterWrapper>
      </Container>
    </footer>
  );
}
