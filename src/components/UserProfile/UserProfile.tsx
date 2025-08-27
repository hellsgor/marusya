import { Heart, User } from '../../ui/icons';
import { Favorites } from '../Favorites/Favorites';
import { Settings } from '../Settings/Settings';
import { Tabs, type TabDef } from '../Tabs/Tabs';

export function UserProfile() {
  const userProfileTabDef: TabDef[] = [
    {
      id: 'favorites',
      icon: <Heart />,
      short: 'Избранное',
      long: 'Избранные фильмы',
      content: <Favorites />,
    },
    {
      id: 'settings',
      icon: <User />,
      short: 'Настройки',
      long: 'Настройка аккаунта',
      content: <Settings />,
    },
  ];

  return (
    <Tabs children={userProfileTabDef} syncWithUrl={true} compactBp={'md'} />
  );
}
