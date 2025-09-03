// import './App.scss';

import { RouterProvider } from 'react-router';
import { router } from './routes';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// import { BrowserRouter } from 'react-router';
// import { AppRoutes } from './router/routes';
// import { QueryClientProvider } from '@tanstack/react-query';
// import { queryClient } from './api/queryClient';
// import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
// import { store } from './store';
// import { Provider } from 'react-redux';

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <QueryClientProvider client={queryClient}>
//           <ScrollToTop />
//           <AppRoutes />
//           <div id="modals"></div>
//           <ReactQueryDevtools initialIsOpen={false} />
//         </QueryClientProvider>
//       </BrowserRouter>
//     </Provider>
//   );
// }

function App() {
  return <RouterProvider router={router} />;
}

export default App;
