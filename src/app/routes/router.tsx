import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import { Layout } from '../layout';

const MainPage = lazy(() =>
  import('@/pages/main').then((m) => ({ default: m.MainPage })),
);
const GenresPage = lazy(() =>
  import('@/pages/genres').then((m) => ({ default: m.GenresPage })),
);
const GenrePage = lazy(() =>
  import('@/pages/genre').then((m) => ({ default: m.GenrePage })),
);
const MoviePage = lazy(() =>
  import('@/pages/movie').then((m) => ({ default: m.MoviePage })),
);
const ProfilePage = lazy(() =>
  import('@/pages/profile').then((m) => ({ default: m.ProfilePage })),
);
const NoMatchPage = lazy(() =>
  import('@/pages/no-match').then((m) => ({ default: m.NoMatchPage })),
);

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: MainPage },
      {
        path: '/genres',
        children: [
          { index: true, Component: GenresPage },
          { path: ':genre', Component: GenrePage },
        ],
      },
      {
        path: '/movies:movieId',
        Component: MoviePage,
      },
      { path: '/profile', Component: ProfilePage },
      { path: '*', Component: NoMatchPage },
    ],
  },
]);
