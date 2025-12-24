import type { MovieModel } from '../../model/types';

export type MovieDetailProps = {
  movie: MovieModel;
  randomRefetch?: () => void;
  onTrailerButtonClick: () => void;
  isFavoriteMovie: boolean;
};

export type MovieDetailPropsRandom = MovieDetailProps['randomRefetch'];
