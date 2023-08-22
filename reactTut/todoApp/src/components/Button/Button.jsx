import React from "react";

const Button = ({ children, onClick }) => {
  // console.log("Button component rendered");
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
