import { Route, Routes } from 'react-router';

import { GENRES_RU } from '../constants';
import { getTitle } from '../helpers';

import { MainLayout } from '../layouts/MainLayout/MainLayout';

import { Home } from '../pages/Home';
import { Genres } from '../pages/Genres';
import { NoMatch } from '../pages/NoMatch';
import { Genre } from '../pages/Genre';
import { Movie } from '../pages/Movie';
import { Profile } from '../pages/Profile';
import { PrivateRoute } from './PrivateRoute';
import { useAppSelector } from '../store/hooks';

export function AppRoutes() {
  const userName = useAppSelector((state) => state.auth.user)?.name || '';

  const navigationRoutes = [
    { path: '/', element: <Home />, title: 'Главная' },
    { path: '/genres', element: <Genres />, title: 'Жанры' },
    {
      path: '/genres/:genreName',
      element: <Genre />,
      title: (str: string) => getTitle(str, GENRES_RU),
    },
    {
      path: '/movies/:movieId',
      element: <Movie />,
      title: '',
    },
    { path: '*', element: <NoMatch />, title: '404' },
    {
      path: '/profile',
      element: (
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      ),
      title: userName,
    },
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
