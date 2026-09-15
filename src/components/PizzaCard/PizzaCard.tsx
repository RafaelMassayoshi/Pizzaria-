import { Button } from '../Button/Button';
import { PizzaIllustration } from '../PizzaIllustration/PizzaIllustration';

import './PizzaCard.css';

interface PizzaCardProps {
  name: string;
  description: string;
  price: string;
  onAdd?: () => void;
}

export function PizzaCard({
  name,
  description,
  price,
  onAdd,
}: PizzaCardProps) {
  return (
    <article className="pizza-card">
      <div className="pizza-card-image">
        {/*
          IMAGENS:
          pizza.svg
          cheese.svg
          pepperoni.svg
        */}

        <PizzaIllustration size="small" />
      </div>

      <div className="pizza-card-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <div className="pizza-card-bottom">
          <strong>{price}</strong>

          <Button onClick={onAdd}>
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}