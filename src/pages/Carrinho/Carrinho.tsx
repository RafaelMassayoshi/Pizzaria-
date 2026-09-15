import { Header } from '../../components/Header/Header';
import { PizzaIllustration } from '../../components/PizzaIllustration/PizzaIllustration';

import { useCart } from '../../context/CartContext';

import './Carrinho.css';

const taxaEntrega = 8;

export function Carrinho() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  function formatarPreco(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const total = subtotal + taxaEntrega;

  return (
    <div className="carrinho">
      <Header />

      <main className="carrinho-main">
        <section className="carrinho-heading">
          <h1>Seu carrinho</h1>

          <p>
            Confira os itens antes de finalizar.
          </p>
        </section>

        <div className="carrinho-layout">
          <section className="cart-items">
            <h2>Itens do pedido</h2>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p>
                  Seu carrinho está vazio.
                </p>

                <span>
                  Adicione uma pizza pelo cardápio.
                </span>
              </div>
            ) : (
              <div className="cart-items-list">
                {items.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >
                    <div className="cart-item-image">
                      {/*
                        IMAGENS:
                        pizza.svg
                        cheese.svg
                        pepperoni.svg
                      */}

                      <PizzaIllustration
                        size="small"
                      />
                    </div>

                    <div className="cart-item-info">
                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        {formatarPreco(
                          item.price
                        )}
                      </p>
                    </div>

                    <div className="quantity-control">
                      <button
                        type="button"
                        className="quantity-button quantity-button-minus"
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        aria-label={`Diminuir quantidade de ${item.name}`}
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        className="quantity-button quantity-button-plus"
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        aria-label={`Aumentar quantidade de ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <aside className="order-summary">
            <h2>Resumo do pedido</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                {formatarPreco(subtotal)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Entrega</span>

              <strong>
                {formatarPreco(
                  taxaEntrega
                )}
              </strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>

              <strong>
                {formatarPreco(total)}
              </strong>
            </div>

            <button
              type="button"
              className="checkout-button"
              disabled={items.length === 0}
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