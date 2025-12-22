import { Tabs, type TabType } from '@/shared/ui';
import { useState, type ReactNode } from 'react';

export function ProfileViews() {
  const [activeView, setActiveView] = useState(0);

  const views: (TabType & { node: ReactNode })[] = [
    {
      text: { desktop: 'Избранные фильмы', mobile: 'Избранное' },
      icon: 'HeartEmpty',
      node: (() => <p>Избранное</p>)(),
    },
    {
      text: { desktop: 'Настройка аккаунта', mobile: 'Настройки' },
      icon: 'User',
      node: (() => <p>Данные пользователя</p>)(),
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
