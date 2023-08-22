import React from "react";

const Input = ({ type, placeholder, text, onChangeHandler }) => {
  // console.log("Input component rendered");
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

export default Input;
