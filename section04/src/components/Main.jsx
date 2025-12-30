// Css를 불러올때는 경로만 작성해줘도 된다. ReactApp이 내부적으로 처리해준다.
import './Main.css';

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (조건문, 반복문 x / 삼항연산자, 함수호출 o)
// 2. 숫자, 문자열, 배열 값만 랜더링된다.( null, undefined, boolean, object 값은 랜더링 x)
//   2-1. 객체를 랜더링 하려고한다면 object are not vbalid as a  React child 에러 발생
// 3. 모든 테그는 닫혀있어야 한다.
// 4. 최상위 테그는 반드시 하나여야한다.
//   4-1. 취상위 태그를 여러개 사용하고 싶다면 Fragment 사용(<></>) - 빈 태그
function Main() {
  const user = {
    name: '임성호',
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>
  //     {user.isLogin ? (
  //       <h2>{user.name}님 환영합니다.</h2>
  //     ) : (
  //       <h2>로그인 해주세요.</h2>
  //     )}
  //   </>
  // );
}

export default Main;
