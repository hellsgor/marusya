import { useProfile } from '../../hooks/useProfile';
import { openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { User } from '../../ui/icons';
import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { LoginModal } from '../LoginModal/LoginModal';
import { RegisterModal } from '../RegisterModal/RegisterModal';
import { ThanksModal } from '../ThanksModal/ThanksModal';

interface AuthProps {
  isVertTablet: boolean;
}

export function Auth({ isVertTablet }: AuthProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useProfile();

  return (
    <>
      {isLoggedIn ? (
        <MenuItem
          href="/profile"
          children={isVertTablet ? <User /> : user?.name}
        />
      ) : (
        <>
          <MenuItem
            onClick={() => {
              dispatch(openModal('login'));
            }}
            children={isVertTablet ? <User /> : 'Войти'}
          />

          <LoginModal />
          <RegisterModal />
          <ThanksModal />
        </>
      )}
    </>
  );
}
