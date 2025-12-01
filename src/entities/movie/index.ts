export {
  useGetByGenreQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  useGetTop10Query,
  movieApi,
} from './api/movieApi';
export type { MoviesModel, MovieModel } from './model/types';
export type { MovieDetailPropsRandom } from './ui';
export {
  MovieCard,
  MovieDetail,
  MovieInfo,
  MovieList,
  MovieSlider,
  TrailerModal,
} from './ui';
