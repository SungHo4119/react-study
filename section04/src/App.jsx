import './App.css';
import Button from './components/Button';

// App 컴포넌트
function App() {
  const ButtonPros = {
    text: '버튼',
    color: 'green',
    a: 10,
    b: 20,
    c: 30,
  };

  return (
    <>
      <Button
        {...ButtonPros}
        text="메일"
        color="red"
      />
      <Button
        {...ButtonPros}
        text="카페"
      />
      <Button
        {...ButtonPros}
        text="블로그"
      >
        <div> 자식요소</div>
      </Button>
    </>
  );
}

export default App;
