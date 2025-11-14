import { StoreProvider } from '../store';
import { RouterProvider } from 'react-router';
import { router } from '../routes';

export function AppProviders() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
