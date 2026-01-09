import { RouterProvider } from 'react-router';

import { router } from '@/app/routes';
import { StoreProvider } from '@/app/store';

export function AppProviders() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
