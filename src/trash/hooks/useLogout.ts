import { userService } from '../api/userService';
import { queryClient } from '../api/queryClient';
import { useAppDispatch } from '../store/hooks';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router';

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async () => {
    await userService.logout();
    queryClient.invalidateQueries({ queryKey: ['profile'] });
    queryClient.invalidateQueries({ queryKey: ['favorites'] });
    dispatch(logout());
    navigate('/');
  };
}
