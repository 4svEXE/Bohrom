import React from "react";
import "./index.scss";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {

  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
