import './App.scss';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { BrowserRouter } from 'react-router';
import { AppRotes } from './router/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/query-client';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRotes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
