import { useEffect } from 'react';

const Even = () => {
  // 마운트 될때 실행되지만 반환하는 함수를 클린업 함수라고 부른다.
  // return문에 있는 함수는 언마운트 될 때 실행된다.
  useEffect(() => {
    // 클린업, 정리 함수
    return () => {
      console.log('Even 컴포넌트 언마운트');
    };
  }, []);
  return <div> 짝수입니다.</div>;
};

export default Even;
