import { useState } from 'react';

// 리엑트의 리랜더링
// 1. 상태가 변경될 때 (state)
// 2. 부모 컴포넌트가 리랜더링 될 때 (props)
// 별도의 자식 컴포넌트로 뺀다면 다른 자식컴포넌트들은 리랜더링 되지 않음
const Bulb = () => {
  const [light, setLight] = useState('Off');
  return (
    <div>
      {light === 'On' ? (
        <h1 style={{ backgroundColor: 'orange' }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>Off</h1>
      )}

      <button
        onClick={() => {
          light === 'Off' ? setLight('On') : setLight('Off');
        }}
      >
        {light === 'Off' ? 'Turn On' : 'Turn Off'}
      </button>
    </div>
  );
};

export default Bulb;
