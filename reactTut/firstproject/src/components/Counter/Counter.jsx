import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({ label, count, handleIncrement }) => {
  return (
    <div className="counter">
      <h2>{label}</h2>
      <h1>{count}</h1>

      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
