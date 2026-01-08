import type { MovieModel } from '@/entities/movie';

import { useRef, useState, Suspense, lazy } from 'react';

import { useAppSelector } from '@/shared/lib';
import { Modal, MODAL_TYPES } from '@/shared/ui';

const ReactPlayer = lazy(() => import('react-player'));

type TrailerModalProps = {
  onClose: () => void;
  movie: MovieModel;
};

export function TrailerModal({ onClose, movie }: TrailerModalProps) {
  const isVisible = useAppSelector((state) => state.modal.modals.trailer);

  const playerRef = useRef<HTMLVideoElement>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const handleOnClose = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
    }
    setIsPlayerReady(false);
    onClose();
  };

  return (
    <Modal type={MODAL_TYPES.TRAILER} onClose={handleOnClose}>
      <Suspense fallback={<div>Загрузка плеера...</div>}>
        <ReactPlayer
          ref={playerRef}
          playing={isVisible && isPlayerReady}
          src={movie.trailerUrl ?? undefined}
          width={'100%'}
          height={'100%'}
          controls
          onReady={() => setIsPlayerReady(true)}
          config={{
            youtube: {
              rel: 0,
              iv_load_policy: 3,
              fs: 0,
              enablejsapi: 1,
            },
          }}
        />
      </Suspense>
    </Modal>
  );
}
