import React from "react";
import "./index.scss";
import Loader from "../loader";

interface ButtonProps {
  onClick: () => void;
  text: string;
  icon?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  icon,
  className = "",
  disabled = false,
  isLoading = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${disabled || isLoading ? "disabled" : ""}`}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {text}

          {icon && (
            <span
              className="btn-icon"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          )}
          
        </>
      )}
    </button>
  );
};

export default Button;
