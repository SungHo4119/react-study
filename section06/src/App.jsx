import './App.css';
import Controller from './components/Contorller';
import Viewer from './components/Viewer';
import useCount from './hooks/useCount';

function App() {
  const { count, onClickBtn } = useCount(0);
  return (
    <div className="App">
      <h1>Simple Count</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
