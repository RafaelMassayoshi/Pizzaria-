import './PizzaIllustration.css';

import pizzaImage from '../../assets/images/pizza.svg';
import cheeseImage from '../../assets/images/cheese.svg';
import pepperoniImage from '../../assets/images/pepperoni.svg';

interface PizzaIllustrationProps {
  size?: 'large' | 'small';
}

export function PizzaIllustration({
  size = 'large',
}: PizzaIllustrationProps) {
  return (
    <div className={`pizza ${size}`}>
      
      {/* IMAGEM: base da pizza */}
      <img
        src={pizzaImage}
        alt="Pizza"
        className="pizza-base"
      />

      {/* IMAGEM: queijo */}
      <img
        src={cheeseImage}
        alt=""
        className="pizza-cheese"
      />

      {/* IMAGEM: pepperoni */}
      <img
        src={pepperoniImage}
        alt=""
        className="pepperoni pepperoni-1"
      />

      {/* IMAGEM: pepperoni */}
      <img
        src={pepperoniImage}
        alt=""
        className="pepperoni pepperoni-2"
      />

      {/* IMAGEM: pepperoni */}
      <img
        src={pepperoniImage}
        alt=""
        className="pepperoni pepperoni-3"
      />

      {/* IMAGEM: pepperoni */}
      <img
        src={pepperoniImage}
        alt=""
        className="pepperoni pepperoni-4"
      />

      {/* IMAGEM: pepperoni */}
      <img
        src={pepperoniImage}
        alt=""
        className="pepperoni pepperoni-5"
      />

    </div>
  );
}