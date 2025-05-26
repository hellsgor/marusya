import './App.scss';

import { BrowserRouter } from 'react-router';
import { AppRotes } from './router/routes';

function App() {
  return (
    <BrowserRouter>
      <AppRotes />
    </BrowserRouter>
  );
}

export default App;
