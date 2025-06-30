import st from './MovieDetail.module.scss';

import { useState } from 'react';

import type { MovieModel } from '../../models';
import type { MovieActionsProps } from '../MovieActions/MovieActions';
import type { MovieInfoProps } from '../MovieInfo/MovieInfo';

import { Poster } from '../Poster/Poster';
import { MovieInfo } from '../MovieInfo/MovieInfo';
import { MovieActions } from '../MovieActions/MovieActions';
import { Modal } from '../Modal/Modal';

type MovieDetailType = Pick<MovieModel, 'backdropUrl'> & MovieInfoProps['data'];

interface MovieDetailProps extends MovieActionsProps {
  data: MovieDetailType;
}

export function MovieDetail({
  data: { title, backdropUrl, plot, tmdbRating, releaseYear, genres, runtime },
  onRefresh,
  url,
}: MovieDetailProps) {
  const [isTrailer, setIsTrailer] = useState(false);

  return (
    <>
      <div className={st.movieDetail}>
        <div className={st.movieDetail__wrapper}>
          <MovieInfo
            data={{ title, plot, tmdbRating, releaseYear, genres, runtime }}
          />

          <MovieActions
            url={url}
            onRefresh={onRefresh}
            onTrailerButtonClick={() => setIsTrailer(true)}
          />
        </div>

        <div className={st.movieDetail__poster}>
          <Poster src={backdropUrl ?? undefined} alt={`${title} poster`} />
        </div>
      </div>

      <Modal
        isVisible={isTrailer}
        onClose={() => setIsTrailer(false)}
        isFlat={true}
      >
        <p>hello</p>
      </Modal>
    </>
  );
}
