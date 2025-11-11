import { Modal } from '@/shared/ui';
import type { MovieModel } from '../../model/types';
import ReactPlayer from 'react-player';
import { useRef } from 'react';

type TrailerModalProps = {
  isVisible: boolean;
  onClose: () => void;
  movie: MovieModel;
};

export function TrailerModal({ isVisible, onClose, movie }: TrailerModalProps) {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  const handleOnClose = () => {
    onClose();
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
    }
  };

  return (
    <Modal
      type="trailer"
      isVisible={isVisible}
      onClose={handleOnClose}
      name="trailer"
    >
      <ReactPlayer
        ref={playerRef}
        playing={isVisible}
        src={movie.trailerUrl ?? undefined}
        width={'100%'}
        height={'100%'}
        controls
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
