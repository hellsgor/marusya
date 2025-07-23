import st from './MovieDetail.module.scss';

import { useState } from 'react';

import type { MovieModel } from '../../models';
import type { MovieActionsProps } from '../../ui/MovieActions/MovieActions';
import type { MovieInfoProps } from '../../ui/MovieInfo/MovieInfo';

import { Poster } from '../../ui/Poster/Poster';
import { MovieInfo } from '../../ui/MovieInfo/MovieInfo';
import { MovieActions } from '../../ui/MovieActions/MovieActions';
import { Modal } from '../../ui/Modal/Modal';
import { MovieTrailer } from '../../ui/MovieTrailer/MovieTrailer';

type MovieDetailType = Pick<MovieModel, 'backdropUrl' | 'trailerUrl'> &
  MovieInfoProps['data'];

interface MovieDetailProps
  extends Omit<MovieActionsProps, 'onTrailerButtonClick' | 'isTrailer'> {
  data: MovieDetailType;
}

export function MovieDetail({
  data: {
    title,
    backdropUrl,
    plot,
    tmdbRating,
    releaseYear,
    genres,
    runtime,
    trailerUrl,
  },
  onRefresh,
  url,
}: MovieDetailProps) {
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [isTrailerPlayed, setIsTrailerPlayed] = useState(false);

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
            onTrailerButtonClick={() => setIsTrailerModalOpen(true)}
            isTrailer={!!trailerUrl}
          />
        </div>

        <div className={st.movieDetail__poster}>
          <Poster src={backdropUrl ?? undefined} alt={`${title} poster`} />
        </div>
      </div>

      {trailerUrl && (
        <Modal
          isVisible={isTrailerModalOpen}
          onClose={() => {
            setIsTrailerModalOpen(false);
            setIsTrailerPlayed(true);
          }}
          isFlat={true}
        >
          {(isTrailerModalOpen || isTrailerPlayed) && (
            <MovieTrailer
              url={trailerUrl}
              playing={isTrailerModalOpen && !isTrailerPlayed}
            />
          )}
        </Modal>
      )}
    </>
  );
}
