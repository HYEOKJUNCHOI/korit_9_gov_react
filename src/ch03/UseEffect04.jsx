import { useEffect, useState } from "react";

function UseEffect04() {
  // num 상태
  // num 상태의 제곱 값을 화면에 출력하시오.
  // 단 처음  num이 0일 때에는
  // '숫자를 증가시켜 결과를 확인하세요.'
  // 라는 안내 메세지를 alert으로 출력하기
  // 최소값 0 밑으로는 내려 갈 수 없음.

  const [num, setNum] = useState(0);
  const [xnum, setXNum] = useState(0);
  const [isZero, setZero] = useState(true);

  useEffect (() =>{setXNum(num ** 2)}, [num]);

  const upnum = () => {
  setNum(num + 1);
  setXNum(num ** 2);
  }

useEffect (() => {
  setZero(xnum === 0);
},[xnum])

  useEffect( () => {
    if (isZero) {
      setTimeout(() => {
        alert("숫자를 증가시켜 결과를 확인하세요.");
      }, 100);
    }
  } , [isZero])

  const downnum = () => {
  if (num > 0) {
    setNum(num - 1);
    setXNum(num ** 2);
  }
}

    return <>
        일반 <h2>{num}</h2>
        제곱 <h2>{xnum}</h2>
        <button onClick={upnum}>1증가</button>
        <button onClick={downnum}>1감소</button>
        

    </>
}

export default UseEffect04;