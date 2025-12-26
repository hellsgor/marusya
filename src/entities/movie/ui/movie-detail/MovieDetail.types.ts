import type { MovieModel } from '../../model/types';

export type MovieDetailProps = {
  movie: MovieModel;
  onRandomRefetchButtonClick?: () => void;
  onTrailerButtonClick: () => void;
};

export type MovieDetailPropsRandom =
  MovieDetailProps['onRandomRefetchButtonClick'];
