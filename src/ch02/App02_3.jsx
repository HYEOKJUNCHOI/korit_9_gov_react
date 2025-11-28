import { useState } from "react";

function App02_3() {
    // 전체 todo 객체들이 들어 있는 배열을 저장 할 상태 만들기
    const [ todos, setTodos ] = useState([]);

    return <>
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
    </>
}


function TodoInput({ todos, setTodos }) {
    // input 내용 저장 할 상태 만들기
    const [ value, setValue ] = useState("");

    // input 내용 value 상태에 저장
    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    // 등록버튼 누르면 이 함수 동작
    const handleOnClick = () => {

        // todo 배열에 추가할 todo객체 생성
        const todo = {
            content: value,
            writeDate: new Date().toLocaleString(),
        }

        setTodos([...todos, todo]); // todo 배열에 추가
        // 새로운 배열을 만들어서 기존의 todos에 들어있던 요소들 
        // 스프레드로 다 복사하고 마지막에 새로만든 todo 객체 추가

        setValue("");   // input 내용 초기화
    }
    
    return <div>
        <input type="text" value={value} onChange={handleOnChange} />
        <button onClick={handleOnClick}>등록</button>
    </div>
}


function TodoList({todos}) {
    // todos를 받아서 map을 돌려 li 요소로 바꾼다음 화면에 출력
    // 객체 -> <li> 변환
    return <ul>
        {
            todos.map(todo => 
            
            <li style={{ marginBottom: "20px" }}> 
            내용: {todo.content}   
            <br/>
            작성일: {todo.writeDate}</li>)
        }
    </ul>
}

export default App02_3;