import * as React from 'react';
import './Button.css';

// type ButtonStyle = {
//   [property: string]: string;
// };

export interface ButtonProps {
  label: string;
  // style: ButtonStyle;
  onClick?: () => void;
  variant?: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  color?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  size = 'medium',
  backgroundColor,
  color,
  ...props
}: ButtonProps) => {
  switch (variant) {
    case 'secondary':
      'secondary';
      break;
    case 'danger':
      'danger';
      break;
    default:
  }
  return (
    <button
      className={['button', `button--${size}`, `button--${variant}`].join(' ')}
      style={{ backgroundColor, color }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
