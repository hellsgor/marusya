import type { MovieModel } from '../model/types';

export const MOVIE_PROPERTIES_RU: Partial<Record<keyof MovieModel, string>> = {
  language: 'язык оригинала',
  budget: 'бюджет',
  revenue: 'выручка',
  director: 'режиссёр',
  production: 'продакшен',
  awardsSummary: 'награды',
} as const;
