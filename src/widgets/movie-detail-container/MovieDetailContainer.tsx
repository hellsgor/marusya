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
  randomRefetch?: MovieDetailPropsRandom;
};

export function MovieDetailContainer({
  movie,
  randomRefetch,
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
        randomRefetch={randomRefetch}
      />
      {isTrailerModalOpen && (
        <TrailerModal
          movie={movie}
          onClose={() => dispatch(closeModal('trailer'))}
        />
      )}
    </>
  );
}
