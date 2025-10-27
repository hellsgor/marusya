import { capitalizeFirstLetter, getMappedValue } from '@/shared/lib';
import { MOVIE_PROPERTIES_RU } from '../../config/moviePropertiesRu';
import type { MovieModel } from '../../model/types';
import { LANGUAGES } from '../../config/languages';

export function getMovieProp(
  key: keyof typeof MOVIE_PROPERTIES_RU,
  movie: MovieModel,
) {
  const value = () => {
    switch (key) {
      case 'language':
        return capitalizeFirstLetter(
          getMappedValue(`${movie[key]}`, LANGUAGES),
        );
      case 'budget':
      case 'revenue':
        return `${Number(movie[key]).toLocaleString('ru-RU')} $`;
      default:
        return movie[key] ? `${movie[key]}` : null;
    }
  };

  return {
    name: capitalizeFirstLetter(MOVIE_PROPERTIES_RU[key] ?? ''),
    value: value(),
  };
}
