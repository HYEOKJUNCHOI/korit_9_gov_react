import { useState } from "react";

function Inputs() {
  const [ fullName, setFullName ] = useState("");
  const [ age , setAge] = useState("");

  const handleOnchange = (e) => {
    setFullName(e.target.value);
  }
  const handleOnchange2 = (e) => {
    setAge(e.target.value);
  }

    return <>
    <input type="text" placeholder="이름" onChange={handleOnchange}/>
      <input type="text" placeholder="나이" onChange={handleOnchange2}/>
      <h2>이름: {fullName} </h2>
      <h2>나이: {age} </h2>
    </>
}

export default Inputs;