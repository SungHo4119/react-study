// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅은 내부에서만 호출 가능하다
// 2. 조건부(조건문,반복문)로 호출 될 수 없다.
// 3. 커스텀 훅을 직접 만들 수 있다.
//   3-1 (useState, useEffect 등) 기존 훅을 조합하여 새로운 훅을 만들 수 있다.
import useInput from '../hooks/useInput';

const HookExam = () => {
  // 커스텀 훅 사용
  const { input, onChange } = useInput();

  return (
    <div>
      Hook Exam Component
      <div>
        <input
          value={input}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default HookExam;
