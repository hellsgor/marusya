import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Genres } from '../pages/Genres';
import { NoMatch } from '../pages/NoMatch';

export function AppRotes() {
  const navigationRoutes = [
    { path: '/', element: <Home />, title: 'Главная' },
    { path: '/genres', element: <Genres />, title: 'Жанры' },
    { path: '*', element: <NoMatch />, title: '404' },
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
