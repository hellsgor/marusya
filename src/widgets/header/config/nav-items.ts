import { ROUTES } from '@/shared/routes';
import { Icon } from '@/shared/ui';

export const NAV_ITEMS = {
  main: {
    text: 'Главная',
    icon: null,
    path: ROUTES.main,
  },
  genres: {
    text: 'Жанры',
    icon: Icon.Items,
    path: ROUTES.genres,
  },
};
