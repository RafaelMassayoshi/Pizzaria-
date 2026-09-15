import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import './Button.css';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className="button"
      {...props}
    >
      {children}
    </button>
  );
}