import { useState } from 'react';

function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const onClickBtn = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  return { count, onClickBtn };
}

export default useCount;
