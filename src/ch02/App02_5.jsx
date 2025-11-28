import { useState } from "react";

function App02_5() {
  const [value, setValue] = useState("");
  const [writer, setWriter] = useState("");

  const handelOnChange = (e) => {
  setValue(e.target.value);
  }
  const handelWriterOnChange = (e) => {
  setWriter(e.target.value);
  }

  const handleOnClick = () => {
    setValue(value);
    setWriter(writer);
    setValue("");
    setWriter("");
  }

function TodoList({todos}) {
  return <ul>
    {
      todos.map(todo =>
        <li> 내용: {todo.content}
        <br/>
        작성일: {todo.writeDate}
        </li>
      )
    }
  </ul>
}

  const todo = {
    content: value,
    writeDate: new Date().toLocaleString(),
    writer: writer,
  }

    return <>
    <div>
      <input type="text" className="value" value={value}/>
      <input type="text" className="writer" writer={writer} />
      <button onClick={handleOnClick}>등록</button>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
    </>
}

export default App02_5;