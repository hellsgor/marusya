import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Genres } from '../pages/Genres';
import { NoMatch } from '../pages/NoMatch';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { Genre } from '../pages/Genre';
import { GENRES_RU } from '../constants';
import { getTitle } from '../helpers';

export function AppRoutes() {
  const navigationRoutes = [
    { path: '/', element: <Home />, title: 'Главная' },
    { path: '/genres', element: <Genres />, title: 'Жанры' },
    {
      path: '/genres/:genreName',
      element: <Genre />,
      title: (str: string) => getTitle(str, GENRES_RU),
    },
    { path: '*', element: <NoMatch />, title: '404' },
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<MainLayout title={route.title}>{route.element}</MainLayout>}
        />
      ))}
    </Routes>
  );
}
