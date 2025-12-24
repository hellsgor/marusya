import { Tabs, type TabType } from '@/shared/ui';
import { Favorites } from '@/widgets/favorites';
import { UserSettings } from '@/widgets/user-settings';
import { useState, type ReactNode } from 'react';

export function ProfileViews() {
  const [activeView, setActiveView] = useState(0);

  const views: (TabType & { node: ReactNode })[] = [
    {
      text: { desktop: 'Избранные фильмы', mobile: 'Избранное' },
      icon: 'HeartEmpty',
      node: <Favorites />,
    },
    {
      text: { desktop: 'Настройка аккаунта', mobile: 'Настройки' },
      icon: 'User',
      node: <UserSettings />,
    },
  ];

  return (
    <>
      <Tabs
        items={views}
        active={activeView}
        onTabClick={(idx: number) => {
          setActiveView(idx);
        }}
      />

      {views[activeView].node}
    </>
  );
}
