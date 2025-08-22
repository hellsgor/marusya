import { useQuery } from '@tanstack/react-query';
import { userService } from '../api/userService';
import type { ProfileModel } from '../models';
import { useAppDispatch } from '../store/hooks';
import { setStatus, setUser } from '../store/authSlice';
import { queryClient } from '../api/queryClient';
import { useEffect } from 'react';

export function useProfile() {
  const dispatch = useAppDispatch();

  const query = useQuery<ProfileModel>({
    queryKey: ['profile'],
    queryFn: () => userService.get(),
    retry: false,
  });

  useEffect(() => {
    if (query.isPending) {
      dispatch(setStatus('loading'));
    } else if (query.isSuccess) {
      dispatch(setUser(query.data));
      dispatch(setStatus('authenticated'));
    } else if (query.isError) {
      dispatch(setStatus('unauthenticated'));
    }
  }, [query.isPending, query.isSuccess, query.isError, query.data, dispatch]);

  return {
    ...query,
    refetchProfile: () => queryClient.refetchQueries({ queryKey: ['profile'] }),
  };
}
