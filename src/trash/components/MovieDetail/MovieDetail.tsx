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

type MovieDetailData = MovieInfoProps['data'] &
  Omit<
    MovieActionsProps,
    'onTrailerButtonClick' | 'onRefresh' | 'url' | 'isTrailer'
  > &
  Pick<MovieModel, 'backdropUrl' | 'trailerUrl'>;
interface MovieDetailProps {
  data: MovieDetailData;
  onRefresh?: MovieActionsProps['onRefresh'];
  url?: MovieActionsProps['url'];
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
    id,
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
            id={id}
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
