export const ROUTES = {
  main: '/',
  genres: '/genres',
  genre: (alias: string) => `/genres/${alias}`,
  movie: (id: number) => `/movies/${id}`,
  profile: '/profile',
};
