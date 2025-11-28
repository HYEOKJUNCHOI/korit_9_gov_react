import { useState } from "react";

// 메인 컴포넌트: 전체 앱의 상태를 관리하고 하위 컴포넌트들을 조합
function App02_2() {

  // 입력값 관리 (InputBox에서 실시간 입력되는 값)
  const [name, setName ] = useState("");
  const [age, setAge ] = useState("");

  // 출력용 값 관리 (ButtonBox에서 '확인' 눌렀을 때만 DisplayBox로 전달)
  const [displayName, setDispalyName] = useState("");
  const [displayAge, setDispalyAge] = useState("");

    // 부모 컴포넌트에서 상태를 관리하고
    // 자식 컴포넌트에 props로 전달하는 구조
    return <div>
        <InputBox 
            name={name} 
            setName={setName} 
            age={age} 
            setAge={setAge}
        />

        <ButtonBox 
            setDisplayName={setDispalyName} 
            setDisplayAge={setDispalyAge} 
            name={name} 
            age={age}
        />

        <DisplayBox 
            displayName={displayName} 
            displayAge={displayAge}
        />
    </div>
}

function InputBox({name, setName, age, setAge}) {

    // 이름 입력 시 상태 업데이트
    const handleNameInputOnChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    // 나이 입력 시 상태 업데이트
    const handleAgeInputOnChange = (e) => {
        console.log(e.target.value);
        setAge(e.target.value);
    }

    return <div className="input-box">
        {/* value와 onChange를 연결한 'controlled component' */}
        <input type="text" value={name} onChange={handleNameInputOnChange} />
        <input type="text" value={age} onChange={handleAgeInputOnChange} />
    </div>
}

function ButtonBox({setDisplayName, setDisplayAge, name, age}) {
    
    // 버튼 클릭 시 화면에 보여줄 값으로 상태 복사
    // 즉, 입력값(name, age)을 display용 상태로 옮김
    const handleOnClick = () => {
        setDisplayName(name);
        setDisplayAge(age);
    }

    return <div className="button-box">
        <button onClick={handleOnClick}>확인</button>
    </div>
}

function DisplayBox({displayName, displayAge}) {

    // 최종 출력 영역
    return <div className="display-box">
        <ul>
            <li>{displayName}</li>
            <li>{displayAge}</li>
        </ul>
    </div>
}


export default App02_2;