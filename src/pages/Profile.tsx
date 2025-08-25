import { Tabs } from '../components/Tabs/Tabs';
import { BREAKPOINTS } from '../constants';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Heart, User } from '../ui/icons';
import { Section } from '../ui/Section/Section';

export function Profile() {
  const isMobile = useMediaQuery(BREAKPOINTS.md);
  const tabs = [
    {
      id: 'favorites',
      label: {
        children: (
          <>
            <Heart />
            <span>{isMobile ? 'Избранное' : 'Избранные фильмы'}</span>
          </>
        ),
      },
      content: <p>Избранные фильмы</p>,
    },
    {
      id: 'settings',
      label: {
        children: (
          <>
            <User />
            <span>{isMobile ? 'Настройки' : 'Настройка аккаунта'}</span>
          </>
        ),
      },
      content: <p>Настройка аккаунта</p>,
    },
  ];

  return (
    <Section indentsClasses="pt-64 pb-160 pt-md-16 pb-md-40">
      <h1>Мой аккаунт</h1>
      <Tabs children={tabs} />
    </Section>
  );
}
