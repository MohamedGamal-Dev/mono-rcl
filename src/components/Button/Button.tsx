import * as React from 'react';
import './Button.css';

type ButtonStyle = {
  [property: string]: string;
};

export interface ButtonProps {
  label: string;
  style: ButtonStyle;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.label}
    </button>
  );
};

export default Button;
