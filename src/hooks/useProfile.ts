import { useQuery } from '@tanstack/react-query';
import { userService } from '../api/userService';
import type { ProfileModel } from '../models';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser } from '../store/authSlice';
import { queryClient } from '../api/queryClient';
import { useEffect } from 'react';

export function useProfile() {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const query = useQuery<ProfileModel>({
    queryKey: ['profile'],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    queryFn: () => userService.get(),
    retry: false,
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setUser(query.data));
    }
  }, [query.data, dispatch]);

  return {
    ...query,
    refetchProfile: () => queryClient.refetchQueries({ queryKey: ['profile'] }),
  };
}
