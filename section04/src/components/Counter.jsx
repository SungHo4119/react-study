import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <dev>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </dev>
  );
};

export default Counter;
