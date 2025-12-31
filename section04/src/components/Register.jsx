// React Hooks
// use~~~ 함수들은 React Hooks 라고 부른다.
// useEffect, useReducer, useContext 등 다양한 훅이 존재
// 훅은 오직 함수형 컴포넌트에서만 사용 가능
// 조건문이나 반복문 안에서 훅을 호출하면 안된다.
// 커스텀 훅을 만들어서 재사용 가능

import { useRef, useState } from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  // 렌더링 횟수 카운트
  const countRef = useRef('0');

  // 객체로 여러 ref 관리
  const inputRefs = useRef({});

  const onChange = (e) => {
    countRef.current++;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    // 검사할 필드 순서
    const fields = ['name', 'birth', 'country', 'bio'];

    for (const field of fields) {
      if (input[field] === '') {
        inputRefs.current[field].focus();
        return; // 첫 번째 빈 필드에서 멈춤
      }
    }
    // 모든 필드가 채워졌을 때
    console.log('제출 완료!', input);
  };

  return (
    <>
      <div>
        <div>회원가입 폼</div>
        <div>
          <input
            ref={(el) => (inputRefs.current.name = el)}
            name={'name'}
            value={input.name}
            onChange={onChange}
            placeholder={'이름'}
          />
        </div>

        <div>
          <input
            ref={(el) => (inputRefs.current.birth = el)}
            name="birth"
            value={input.birth}
            type="Date"
            onChange={onChange}
          />
        </div>
        <div>
          <select
            ref={(el) => (inputRefs.current.country = el)}
            name="country"
            value={input.country}
            onChange={onChange}
          >
            <option value="">선택</option>
            <option value="kr">대한민국</option>
            <option value="us">미국</option>
          </select>
        </div>

        <div>
          <textarea
            ref={(el) => (inputRefs.current.bio = el)}
            name="bio"
            value={input.bio}
            onChange={onChange}
            placeholder="자기소개"
          ></textarea>
        </div>

        <button onClick={onSubmit}>제출</button>
      </div>
    </>
  );
};

export default Register;
