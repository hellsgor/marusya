import { Section } from '@/shared/ui';
import { ProfileViews } from '../profile-views/ProfileViews';

export function ProfilePage() {
  return (
    <Section indents={['32px', '160px']}>
      <h1>Мой аккаунт</h1>
      <ProfileViews />
    </Section>
  );
}
