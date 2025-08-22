import type { ReactElement } from 'react';
import { useAppSelector } from '../store/hooks';
import { Navigate, useLocation } from 'react-router';
import { Loader } from '../ui/Loader/Loader';

export function PrivateRoute({ children }: { children: ReactElement }) {
  const { status } = useAppSelector((state) => state.auth);

  const location = useLocation();

  if (status === 'loading') return <Loader size="big" />;

  if (status === 'unauthenticated') {
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: { pathname: location.pathname, search: location.search },
        }}
      />
    );
  }

  return children;
}
