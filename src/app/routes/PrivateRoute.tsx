import { useGetUserQuery } from '@/entities/user';
import { Loader } from '@/shared/ui';
import type { ReactElement } from 'react';
import { Navigate } from 'react-router';

type PrivateRouteProps = {
  children: ReactElement;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loader size="big" />;
  }

  if (isError || !user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
