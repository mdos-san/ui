import React from "react";

interface Props {
  className: string;
  value: string;
}

const Text = ({ className, value, ...otherProps }: Props) => {
  return (
    <p className={`text ${className}`} {...otherProps}>
      {value}
    </p>
  );
};

export default Text;
