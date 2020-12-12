import React from "react";

interface Props {
  className: string;
  placeholder: string;
}

const Input = ({ className, placeholder, ...otherProps }: Props) => {
  return (
    <input
      className={`input ${className}`}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default Input;
