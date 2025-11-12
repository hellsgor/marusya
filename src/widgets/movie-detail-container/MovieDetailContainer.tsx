import {
  MovieDetail,
  TrailerModal,
  type MovieDetailPropsRandom,
  type MovieModel,
} from '@/entities/movie';
import { closeModal, openModal } from '@/features/modal';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { useCallback } from 'react';

type MovieDetailContainerProps = {
  movie: MovieModel;
  random?: MovieDetailPropsRandom;
};

export function MovieDetailContainer({
  movie,
  random = false,
}: MovieDetailContainerProps) {
  const dispatch = useAppDispatch();
  const isTrailerModalOpen = useAppSelector((state) => state.modal.trailer);

  const handleTrailerButtonClick = useCallback(() => {
    dispatch(openModal('trailer'));
  }, [dispatch]);

  return (
    <>
      <MovieDetail
        movie={movie}
        onTrailerButtonClick={handleTrailerButtonClick}
        random={random}
      />
      {(movie?.trailerUrl || movie?.trailerYouTubeId) && (
        <TrailerModal
          movie={movie}
          isVisible={isTrailerModalOpen}
          onClose={() => dispatch(closeModal('trailer'))}
        />
      )}
    </>
  );
}
