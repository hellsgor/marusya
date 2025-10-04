import { StoreProvider } from './store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, THEME } from '@/shared/config';
import { RouterProvider } from 'react-router';
import { router } from '../routes';

export function AppProviders() {
  return (
    <StoreProvider>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}
