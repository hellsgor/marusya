export {
  useGetByGenreQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  useGetTop10Query,
  movieApi,
} from './api/movieApi';
export type { MoviesModel, MovieModel } from './model/types';
export { MovieSchema, MoviesSchema } from './model/types';
export {
  MovieCard,
  MovieInfo,
  MoviesList,
  MoviesSlider,
  MetaItemsRow,
} from './ui';
