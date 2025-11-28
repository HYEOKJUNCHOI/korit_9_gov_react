import { useState } from "react";
import "./style.css";

function App02() {
    const [ name, setName ] = useState("");
    const [name2, setName2] = useState("");
    const [ age, setAge ] = useState("");
    const [ age2, setAge2] = useState("");
    const [ address, setAddress ] = useState("");
    const [ address2, setAddress2] = useState("");

    const data = {
    title: "리액트 기초 시작",
    nameValue: "이름 : ",
    age: "나이 : ",
    address: "주소 : ",

    }

const handleNameInputOnChange = (event) => {
    setName(event.target.value);
}

const handleAgeInputOnChange = (event) => {
    setAge(event.target.value);
}
const handleAddressInputOnChange = (event) => {
    setAddress(event.target.value);
}

    const handleOkOnClick = () => {
        setName2(name);
        setAge2(age);
        setAddress2(address);
        setName("");
        setAge("");
        setAddress("")
    }

    const handleResetOnClick = () => {
        setName2("");
        setAge2("");
        setName("");
        setAge("");
        setAddress("");
        setAddress2("");
    }

    console.log("메인 박스")
    return <div className="main-box">
        <div className="title-box">
        <h1>제목: {data.title} </h1>
        </div>
        <div className="input-box">
            <h3> {data.nameValue}
            <input type="text" value={name} onChange={handleNameInputOnChange}/>
            </h3>
            <h3> {data.age}
            <input type="text" value={age} onChange={handleAgeInputOnChange}/>
            </h3>
            <h3> {data.address}
            <input type="text" value={address} onChange={handleAddressInputOnChange}/>
            </h3>
        </div>
        <div className="button-box">
            <button onClick={handleOkOnClick}>확인</button>
            <button onClick={handleResetOnClick}>초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름 : {name2} </li>
                <li>나이 : {age2} </li>
                <li>주소 : {address2}</li>
            </ul>
        </div>
    </div>
}

export default App02;