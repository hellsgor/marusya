import s from './MovieDetail.module.scss';

import type { MovieModel } from '@/entities/movie';

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

import { closeModal, openModal } from '@/features/modal';
import { ErrorText, Poster } from '@/shared/ui';
import { MovieContent } from '../movie-content';
import { MovieActions } from '../movie-actions';
import { TrailerModal } from '../trailer-modal';

type MovieDetailProps = {
  movie: MovieModel;
  randomRefetch?: () => void;
};

export function MovieDetail({ movie, randomRefetch }: MovieDetailProps) {
  const dispatch = useAppDispatch();
  const isTrailerModalOpen = useAppSelector(
    (state) => state.modal.modals.trailer,
  );

  const handleTrailerButtonClick = useCallback(() => {
    dispatch(openModal('trailer'));
  }, [dispatch]);

  if (!movie) return <ErrorText errorCode="e001" />;

  return (
    <>
      <div className={s.movieDetail}>
        <div className={s.movieDetail__wrapper}>
          <MovieContent movie={movie} />
          <MovieActions
            movie={movie}
            onRandomRefetchButtonClick={randomRefetch}
            onTrailerButtonClick={handleTrailerButtonClick}
          />
        </div>

        <Poster
          className={s.movieDetail__poster}
          src={movie?.backdropUrl || movie?.posterUrl || undefined}
          alt={`${movie?.title} poster`}
        />
      </div>

      {isTrailerModalOpen && (
        <TrailerModal
          movie={movie}
          onClose={() => dispatch(closeModal('trailer'))}
        />
      )}
    </>
  );
}
