import { Section } from '@/shared/ui';
import { ProfileViews } from '../profile-views/ProfileViews';
import { useMediaQuery } from '@/shared/lib';

export function ProfilePage() {
  const mq = useMediaQuery('md');

  return (
    <Section indents={[mq ? '24px' : '32px', mq ? '24px' : '160px']}>
      <h1>Мой аккаунт</h1>
      <ProfileViews />
    </Section>
  );
}
