import { BrowserRouter, Route, Routes } from 'react-router';
import './App.scss';
import { PublicLayout } from './layouts/PublicLayout/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route
            path="/"
            element={<div style={{ color: 'white' }}>i am main page</div>}
          />
          <Route
            path="/genres"
            element={<div style={{ color: 'white' }}>i am genres page</div>}
          />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
}

export default App;
