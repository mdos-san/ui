import React from "react";

interface Props {
  className: string;
  label: string;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button = ({ className, label, onClick, ...otherProps }: Props) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...otherProps}>
      {label}
    </button>
  );
};

export default Button;
