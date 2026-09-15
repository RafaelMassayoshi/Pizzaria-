import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { PizzaCard } from '../../components/PizzaCard/PizzaCard';
import { PizzaIllustration } from '../../components/PizzaIllustration/PizzaIllustration';

import { useCart } from '../../context/CartContext';

import './Home.css';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: string;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Calabresa',
    description:
      'Molho, muçarela, calabresa e cebola.',
    price: 'R$ 49,90',
  },
  {
    id: 2,
    name: 'Margherita',
    description:
      'Molho, muçarela, tomate e manjericão.',
    price: 'R$ 46,90',
  },
  {
    id: 3,
    name: 'Frango Cremoso',
    description:
      'Frango, catupiry e milho.',
    price: 'R$ 52,90',
  },
];

function converterPreco(preco: string) {
  return Number(
    preco
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.')
  );
}

export function Home() {
  const { addItem } = useCart();

  function adicionarAoCarrinho(
    pizza: Pizza
  ) {
    addItem({
      id: pizza.id,
      name: pizza.name,
      description: pizza.description,
      price: converterPreco(pizza.price),
    });
  }

  return (
    <div className="home">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                A pizza que
                <br />
                você estava esperando.
              </h1>

              <p>
                Massa de fermentação lenta, ingredientes selecionados
                <br />
                e muito sabor em cada fatia.
              </p>

              <Button>
                Ver cardápio
              </Button>
            </div>

            <div className="hero-pizza">
              {/*
                IMAGENS:
                pizza.svg
                cheese.svg
                pepperoni.svg
              */}

              <PizzaIllustration />
            </div>

            <span className="hero-caption">
              Feita no forno, feita com carinho.
            </span>
          </div>
        </section>

        <section className="popular">
          <h2>Mais pedidos</h2>

          <div className="pizza-grid">
            {pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                name={pizza.name}
                description={pizza.description}
                price={pizza.price}
                onAdd={() =>
                  adicionarAoCarrinho(
                    pizza
                  )
                }
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 Forno — Pizzaria artesanal
      </footer>
    </div>
  );
}