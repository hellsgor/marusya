import { Tabs } from '../components/Tabs/Tabs';
import { Section } from '../ui/Section/Section';

export function Profile() {
  return (
    <Section indentsClasses="pt-64 pb-160 pt-md-16 pb-md-40">
      <h1>Мой аккаунт</h1>
      <Tabs
        children={[
          {
            id: 'favorites',
            tab: {
              children: 'Избранные фильмы',
            },
            view: <p>Избранные фильмы</p>,
          },
          {
            id: 'settings',
            tab: {
              children: 'Настройка аккаунта',
            },
            view: <p>Настройка аккаунта</p>,
          },
        ]}
      />
    </Section>
  );
}
