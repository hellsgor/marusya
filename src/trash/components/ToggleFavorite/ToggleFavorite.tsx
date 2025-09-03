import { useFavoritesMutation } from '../../hooks/useFavoritesMutation';
import type { MovieModel } from '../../models';
import { openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { Heart } from '../../ui/icons';
import st from './ToggleFavorite.module.scss';
import clsx from 'clsx';
import { Loader } from '../../ui/Loader/Loader';

interface ToggleFavoriteProps {
  id: MovieModel['id'];
}

export function ToggleFavorite({ id }: ToggleFavoriteProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const { mutate, isPending } = useFavoritesMutation();
  const dispatch = useAppDispatch();

  const action = user?.favorites.find((item) => Number(item) === id)
    ? 'delete'
    : 'add';

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal('login'));
      return;
    }

    mutate({ id, action });
  };

  return (
    <Button
      type="button"
      variant="secondary"
      smallPaddings={true}
      className={clsx(
        st.toggleFavorite,
        action === 'delete' && st.toggleFavorite_isAdded,
      )}
      onClick={handleButtonClick}
      disabled={isPending}
    >
      {isPending ? <Loader size="small" /> : <Heart />}
    </Button>
  );
}
