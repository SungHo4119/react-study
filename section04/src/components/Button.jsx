// pros를 그냥 사용하기 보단 구조분해할당을 통해 기본값을 설정
function Button({ children, text, color = 'black' }) {
  // 이벤트 객체
  const onClickButton = (e) => {
    // SyntheticBaseEvent 객체 ( 합성 이벤트)
    // Cross Browser 호환성을 위해 감싸진 객체
    // 브라우저 별로 이벤트가 달라 문제가 될 수 있기 때문에 통일된 인터페이스 제공
    console.log(e);
    console.log(`${text} 버튼이 클릭되었습니다.`);
  };

  return (
    <button
      // 이벤트 핸들러
      onClick={onClickButton}
      // 여기에 마우스 올렸을 때 이벤트 핸들러 추가 가능
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  );
}

// 최신 문법의 경우 defaultProps가 제거되어(react 19) 아래 코드는 동작하지않고
// 구조분해 할당을 통해 기본값을 설정하는 방식을 사용합니다.
// Button.defaultProps = {
//   color: 'blue',
//   text: 'Click Me',
// };

export default Button;
