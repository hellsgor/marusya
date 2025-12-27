import type { MovieModel } from '../../model/types';

import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { useAppSelector } from '@/shared/lib';
import { Modal } from '@/shared/ui';

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
    <Modal type="trailer" onClose={handleOnClose} name="trailer">
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
    </Modal>
  );
}
