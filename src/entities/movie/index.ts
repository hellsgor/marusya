export {
  useGetByGenreQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  useGetTop10Query,
  movieApi,
} from './api/movieApi';
export type { MoviesModel, MovieModel } from './model/types';
export { MovieSchema, MoviesSchema } from './model/types';
export type { MovieDetailPropsRandom } from './ui';
export {
  MovieCard,
  MovieDetail,
  MovieInfo,
  MoviesList as MovieList,
  MovieSlider,
  TrailerModal,
} from './ui';
