import axios from "axios";
import { useEffect, useState } from "react";

function Axios02_2() {

  const [inputValue, setInputValue] = useState({
    username: "",
  });
  const [users, setUsers] = useState([]);

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputOnKeyDown = () => {
    
  };

  const handleInputOnClick = () => {
    
  }


    return (
        <>
      <input type="text" name="inputname"
      onKeyDown={handleInputOnKeyDown}
      onChange={handleInputOnChange}/>
      <button onClick={handleInputOnClick}></button>
        </>
    );
}

export default Axios02_2;