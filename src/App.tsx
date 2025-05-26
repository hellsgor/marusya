import './App.scss';

import { BrowserRouter } from 'react-router';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { AppRotes } from './router/routes';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRotes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
