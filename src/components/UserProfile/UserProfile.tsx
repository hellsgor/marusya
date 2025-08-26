import { Heart, User } from '../../ui/icons';
import { Tabs, type TabDef } from '../Tabs/Tabs';

export function UserProfile() {
  const userProfileTabDef: TabDef[] = [
    {
      id: 'favorites',
      icon: <Heart />,
      short: 'Избранное',
      long: 'Избранные фильмы',
      content: <p>Избранные фильмы</p>,
    },
    {
      id: 'settings',
      icon: <User />,
      short: 'Настройки',
      long: 'Настройка аккаунта',
      content: <p>Настройка аккаунта</p>,
    },
  ];

  return <Tabs children={userProfileTabDef} compactBp={'md'} />;
}
