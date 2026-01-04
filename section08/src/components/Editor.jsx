import { useRef, useState } from 'react';
import './Editor.css';
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onKeyDown = (e) => {
    //  Enter 입력 시 할 일 추가
    // e.keyCode === 13 (구버전)
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    // 공백일 때는 추가하지 않음
    if (content.trim() === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    // 추가 후 입력창 비우기
    setContent('');
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
