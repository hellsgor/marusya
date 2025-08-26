import { BREAKPOINTS } from '../../constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Heart, User } from '../../ui/icons';
import { Tabs } from '../Tabs/Tabs';

export function UserProfile() {
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

  return <Tabs children={tabs} />;
}
