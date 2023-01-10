import React, { useState } from "react";
import "./counter.css";

export default function Counter({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  const decrement = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <div className="counter">
      <div className="title">{title}</div>
      <div className="content">{count}</div>
      <button className="btn" onClick={increment}>
        incrementar
      </button>
      <button className="btn" onClick={decrement}>
        voltar
      </button>
    </div>
  );
}
