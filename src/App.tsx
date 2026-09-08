import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Cardapio } from './pages/Cardapio/Cardapio';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cardapio"
          element={<Cardapio />}
        />

        <Route
          path="/carrinho"
          element={<div>Carrinho</div>}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;