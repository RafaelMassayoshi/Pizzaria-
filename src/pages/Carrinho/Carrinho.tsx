import { useState } from 'react';

import { Header } from '../../components/Header/Header';
import { PizzaIllustration } from '../../components/PizzaIllustration/PizzaIllustration';

import './Carrinho.css';

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
}

const itensIniciais: ItemCarrinho[] = [
  {
    id: 1,
    nome: 'Calabresa',
    preco: 49.9,
  },
  {
    id: 2,
    nome: 'Margherita',
    preco: 46.9,
  },
];

const taxaEntrega = 8;

export function Carrinho() {
  const [quantidades, setQuantidades] = useState<Record<number, number>>({
    1: 1,
    2: 1,
  });

  function aumentarQuantidade(id: number) {
    setQuantidades((atual) => ({
      ...atual,
      [id]: (atual[id] || 0) + 1,
    }));
  }

  function diminuirQuantidade(id: number) {
    setQuantidades((atual) => {
      const quantidadeAtual = atual[id] || 0;

      if (quantidadeAtual <= 1) {
        return atual;
      }

      return {
        ...atual,
        [id]: quantidadeAtual - 1,
      };
    });
  }

  function formatarPreco(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const subtotal = itensIniciais.reduce((total, item) => {
    return total + item.preco * (quantidades[item.id] || 0);
  }, 0);

  const total = subtotal + taxaEntrega;

  return (
    <div className="carrinho">
      <Header />

      <main className="carrinho-main">
        <section className="carrinho-heading">
          <h1>Seu carrinho</h1>
          <p>Confira os itens antes de finalizar.</p>
        </section>

        <div className="carrinho-layout">
          <section className="cart-items">
            <h2>Itens do pedido</h2>

            <div className="cart-items-list">
              {itensIniciais.map((item) => {
                const quantidade = quantidades[item.id] || 0;

                return (
                  <article className="cart-item" key={item.id}>
                    <div className="cart-item-image">
                      {/*
                        IMAGENS:
                        pizza.svg
                        cheese.svg
                        pepperoni.svg

                        A ilustração reutiliza os assets
                        através do componente PizzaIllustration.
                      */}
                      <PizzaIllustration size="small" />
                    </div>

                    <div className="cart-item-info">
                      <h3>{item.nome}</h3>

                      <p>{formatarPreco(item.preco)}</p>
                    </div>

                    <div className="quantity-control">
                      <button
                        type="button"
                        className="quantity-button quantity-button-minus"
                        onClick={() => diminuirQuantidade(item.id)}
                        aria-label={`Diminuir quantidade de ${item.nome}`}
                      >
                        −
                      </button>

                      <span>{quantidade}</span>

                      <button
                        type="button"
                        className="quantity-button quantity-button-plus"
                        onClick={() => aumentarQuantidade(item.id)}
                        aria-label={`Aumentar quantidade de ${item.nome}`}
                      >
                        +
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <aside className="order-summary">
            <h2>Resumo do pedido</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatarPreco(subtotal)}</strong>
            </div>

            <div className="summary-row">
              <span>Entrega</span>
              <strong>{formatarPreco(taxaEntrega)}</strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <strong>{formatarPreco(total)}</strong>
            </div>

            <button
              type="button"
              className="checkout-button"
            >
              Finalizar pedido
            </button>

            <p className="checkout-note">
              Você poderá escolher entrega ou retirada.
            </p>
          </aside>
        </div>

        <p className="next-step">
          Pagamento e endereço serão definidos na próxima etapa.
        </p>
      </main>
    </div>
  );
}