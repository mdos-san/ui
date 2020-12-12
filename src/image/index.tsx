import React from "react";

interface Props {
  alt: string;
  className: string;
  src: string;
}

const Image = ({ alt, className, src, ...otherProps }: Props) => {
  return (
    <img className={`image ${className}`} src={src} alt={alt} {...otherProps} />
  );
};

export default Image;
