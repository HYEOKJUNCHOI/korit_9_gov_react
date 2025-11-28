import { useEffect, useState } from "react";

function UseEffect03() {
  console.log("Component 함수 호출됨");
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);
  const [ result, setResult ] = useState(0);
  
  useEffect(() => {
    console.log("마운트");
  });

  useEffect(() => { // UseEffect는 무조건 한번 실행됨
      setResult(num1 + num2);
  }, [num1, num2]);

const handleNum1OnClick = () => {
  setNum1(num1 + 1);
}

const handleNum2OnClick = () => {
  setNum2(num2 + 1);
}

console.log("JSX 리턴 직전");

  return <>
      <button onClick={handleNum1OnClick}> num1 = {num1} </button>
      <button onClick={handleNum2OnClick}> num2 = {num2} </button>
      <h2>{num1} + {num2} = {result} </h2>
  </>
}

export default UseEffect03;