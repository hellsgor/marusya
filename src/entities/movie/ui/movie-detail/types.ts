import type { MovieModel } from '../../model/types';

export type MovieDetailProps = {
  movie: MovieModel;
  randomRefetch?: () => void;
  onTrailerButtonClick: () => void;
};

export type MovieDetailPropsRandom = MovieDetailProps['randomRefetch'];
