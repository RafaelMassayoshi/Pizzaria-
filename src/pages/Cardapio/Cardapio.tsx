import { useState } from 'react';

import { Header } from '../../components/Header/Header';
import { PizzaIllustration } from '../../components/PizzaIllustration/PizzaIllustration';
import { Button } from '../../components/Button/Button'

import './Cardapio.css';

type Categoria =
  | 'Todas'
  | 'Tradicionais'
  | 'Especiais'
  | 'Vegetarianas'
  | 'Doces';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: string;
  categoria: Categoria;
}

const categorias: Categoria[] = [
  'Todas',
  'Tradicionais',
  'Especiais',
  'Vegetarianas',
  'Doces',
];

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Calabresa',
    description: 'Molho, muçarela, calabresa e cebola.',
    price: 'R$ 49,90',
    categoria: 'Tradicionais',
  },
  {
    id: 2,
    name: 'Margherita',
    description: 'Molho, muçarela, tomate e manjericão.',
    price: 'R$ 46,90',
    categoria: 'Tradicionais',
  },
  {
    id: 3,
    name: 'Frango Cremoso',
    description: 'Frango, catupiry e milho.',
    price: 'R$ 52,90',
    categoria: 'Especiais',
  },
  {
    id: 4,
    name: 'Quatro Queijos',
    description: 'Muçarela, provolone, parmesão e gorgonzola.',
    price: 'R$ 55,90',
    categoria: 'Especiais',
  },
  {
    id: 5,
    name: 'Pepperoni',
    description: 'Molho, muçarela e pepperoni.',
    price: 'R$ 54,90',
    categoria: 'Tradicionais',
  },
  {
    id: 6,
    name: 'Vegetariana',
    description: 'Muçarela, tomate, cebola, milho e pimentão.',
    price: 'R$ 51,90',
    categoria: 'Vegetarianas',
  },
];

export function Cardapio() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria>('Todas');

  const [quantidadeCarrinho, setQuantidadeCarrinho] =
    useState(2);

  const pizzasFiltradas =
    categoriaSelecionada === 'Todas'
      ? pizzas
      : pizzas.filter(
          (pizza) =>
            pizza.categoria === categoriaSelecionada
        );

  function adicionarAoCarrinho() {
    setQuantidadeCarrinho(
      (quantidade) => quantidade + 1
    );
  }

  return (
    <div className="cardapio">

      <Header />

      <main className="cardapio-main">

        {/* =====================================
            CABEÇALHO DA PÁGINA
        ===================================== */}

        <section className="cardapio-heading">

          <h1>Cardápio</h1>

          <p>
            Escolha sua pizza favorita e monte seu pedido.
          </p>

        </section>


        {/* =====================================
            FILTROS
        ===================================== */}

        <div
          className="category-filters"
          role="group"
          aria-label="Categorias do cardápio"
        >

          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={
                categoriaSelecionada === categoria
                  ? 'category-filter active'
                  : 'category-filter'
              }
              onClick={() =>
                setCategoriaSelecionada(categoria)
              }
            >
              {categoria}
            </button>
          ))}

        </div>


        {/* =====================================
            PRODUTOS
        ===================================== */}

        <section
          className="pizza-menu"
          aria-label="Pizzas"
        >

          {pizzasFiltradas.map((pizza) => (

            <article
              className="menu-pizza-card"
              key={pizza.id}
            >

              <div className="menu-pizza-image">

                {/*
                  IMAGEM:
                  pizza.svg
                  cheese.svg
                  pepperoni.svg

                  O componente reutiliza os assets
                  fornecidos anteriormente.
                */}

                <PizzaIllustration size="small" />

              </div>


              <div className="menu-pizza-info">

                <h2>
                  {pizza.name}
                </h2>

                <p>
                  {pizza.description}
                </p>


                <div className="menu-pizza-bottom">

                  <strong>
                    {pizza.price}
                  </strong>

                  <Button
                    onClick={adicionarAoCarrinho}
                  >
                    Adicionar
                  </Button>

                </div>

              </div>

            </article>

          ))}

        </section>


        {/* =====================================
            OBSERVAÇÃO
        ===================================== */}

        <p className="delivery-note">
          Taxa de entrega calculada no checkout.
        </p>

      </main>

    </div>
  );
}