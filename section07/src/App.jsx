import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './components/Contorller';
import Even from './components/Even';
import Viewer from './components/Viewer';
import useCount from './hooks/useCount';

function App() {
  const { count, onClickBtn } = useCount(0);
  const [input, setInput] = useState('');

  // count 값이 변경될 때마다 콘솔에 출력
  // 두번쨰 인수의 값이 바뀔 때 마다 콜백함수가 실행된다.
  // useEffect(
  //   () => {
  //     console.log(`count: ${count}`);
  //     console.log(`input: ${input}`);
  //   },
  //   [count, input] // 의존성 배열 - dependency array - deps
  // );

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    // 마운트 시점에는 실행하지 않도록 처리
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });

  // 3. 언마운트

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
