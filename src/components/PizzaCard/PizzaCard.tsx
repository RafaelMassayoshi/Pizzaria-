import { PizzaIllustration } from '../PizzaIllustration/PizzaIllustration';
import { Button } from '../Button/Button';

import './PizzaCard.css';

interface PizzaCardProps {
  name: string;
  description: string;
  price: string;
}

export function PizzaCard({
  name,
  description,
  price,
}: PizzaCardProps) {
  return (
    <article className="pizza-card">

      <PizzaIllustration size="small" />

      <div className="pizza-card-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="pizza-card-footer">

          <strong>{price}</strong>

          <Button>
            Adicionar
          </Button>

        </div>

      </div>

    </article>
  );
}