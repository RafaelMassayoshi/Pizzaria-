import { Link } from 'react-router-dom';

import cartBadge from '../../assets/images/cart-badge.svg';

import './Header.css';

export function Header() {
  return (
    <header className="header">

      <div className="brand">
        <strong>FORNO</strong>

        <span>
          Pizza artesanal, do forno para sua mesa.
        </span>
      </div>

      <nav className="navigation">

        <Link
          to="/"
          className="active"
        >
          Início
        </Link>

        <Link to="/cardapio">
          Cardápio
        </Link>

        <Link to="/carrinho">
          Carrinho
        </Link>

        <div className="cart-icon">

          {/* IMAGEM: badge/ícone do carrinho vindo do Figma */}
          <img
            src={cartBadge}
            alt="Carrinho"
          />

          <span>2</span>

        </div>

      </nav>

    </header>
  );
}