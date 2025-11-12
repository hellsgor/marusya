export {
  useGetByGenreQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  movieApi,
} from './api/movieApi';
export type { MoviesModel, MovieModel } from './model/types';
export type { MovieDetailPropsRandom } from './ui';
export { MovieCard, MovieDetail, MovieInfo, TrailerModal } from './ui';
