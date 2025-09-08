import { createBrowserRouter } from 'react-router';
import { MainPage } from '@/pages/main';
import { GenresPage } from '@/pages/genres';
import { GenrePage } from '@/pages/genre';
import { MoviePage } from '@/pages/movie';
import { ProfilePage } from '@/pages/profile';
import { NoMatchPage } from '@/pages/no-match';
import { Layout } from '../layout';

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
