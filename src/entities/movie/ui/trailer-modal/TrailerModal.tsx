import { Modal } from '@/shared/ui';
import type { MovieModel } from '../../model/types';

type TrailerModalProps = {
  isVisible: boolean;
  onClose: () => void;
  movie: MovieModel;
};

export function TrailerModal({ isVisible, onClose, movie }: TrailerModalProps) {
  return (
    <Modal
      type="trailer"
      isVisible={isVisible}
      onClose={onClose}
      name="trailer"
    />
  );
}
