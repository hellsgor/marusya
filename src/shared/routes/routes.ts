import { toSlug } from '@/shared/lib';

export const ROUTES = {
  main: '/',
  genres: '/genres',
  genre: (alias: string) => `/genres/${alias}`,
  movie: (id: number, title: string) => `/movies/${toSlug(title)}--${id}`,
  profile: '/profile',
};
