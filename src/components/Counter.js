import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter__container">
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>TAP ME!</button>
      </div>
    </div>
  );
}

export default Counter;
