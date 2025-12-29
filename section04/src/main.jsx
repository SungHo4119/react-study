import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// getElementById('root') 는 root를 아이디로 받는  HTML 요소를 찾아줌 (index.html 참고)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* App 컴포넌트를 렌더링 */}
  //   <App />
  // </StrictMode>
  <App />
);
