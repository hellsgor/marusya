import { GENRES_RU } from '../config/genresRu';

export function getRuGenreName(genre: keyof typeof GENRES_RU | string) {
  return GENRES_RU[genre] ?? genre;
}
