import { useState } from "react";

function App02_4() {

  const[ todos, setTodos ] = useState([]);

    return <>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>    
    </>
}

function TodoInput({ todos, setTodos}) {
    const [value, setValue] = useState("");
    const [writer , setWriter] = useState("");


const handleOnChange = (e) =>{
  setValue(e.target.value);
}

const handleWiterOnChange = (e) =>{
  setWriter(e.target.value);
}

const handleOnClick = () => {

    const todo = {
      content: value,
      writeDate: new Date().toLocaleString(),
      writer: writer,
    }

    setTodos([...todos,todo]);
  
    setValue("");
}

return <div>
  <input type="text" style={{margin:"0 5px"}} name="value" value={value} onChange={handleOnChange} placeholder="내용"/>
  <input type="text" name="writer" writer={writer} onChange={handleWiterOnChange} placeholder="작성자"/>
  
    <button style={{margin:"0 7px"}} onClick={handleOnClick}>등록</button>
</div>
}

    function TodoList({todos}) {
      return  <ul>
        {
          todos.map(todo =>
      
            <li style={{ marginBottom: "15px"}}>
              <h4>내용:</h4> <h4>{todo.content}</h4>
              <br/>
              <h5>작성일: {todo.writeDate} </h5>
              <h5>작성자: {todo.writer}</h5>
              </li>)
        }
      </ul>
    }

export default App02_4;