import React from 'react';

const Button = ({
  onClick = () => {},
  textColor,
  backgroundColor,
  children
}) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color: textColor,
      border: 'none'
    }}
  >
    {children}
  </button>
);

export default Button;
