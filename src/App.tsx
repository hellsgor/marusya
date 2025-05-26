import './App.scss';

import { BrowserRouter } from 'react-router';
import { PublicLayout } from './layouts/PublicLayout/PublicLayout';
import { AppRotes } from './router/routes';

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <AppRotes />
      </PublicLayout>
    </BrowserRouter>
  );
}

export default App;
