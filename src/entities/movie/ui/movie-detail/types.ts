import type { MovieModel } from '../../model/types';

export type MovieDetailProps = {
  movie: MovieModel;
  random: boolean;
  onTrailerButtonClick: () => void;
};

export type MovieDetailPropsRandom = MovieDetailProps['random'];
