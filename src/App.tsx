import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        {/* Próxima etapa */}
        <Route
          path="/cardapio"
          element={<div>Cardápio</div>}
        />

        {/* Próxima etapa */}
        <Route
          path="/carrinho"
          element={<div>Carrinho</div>}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;