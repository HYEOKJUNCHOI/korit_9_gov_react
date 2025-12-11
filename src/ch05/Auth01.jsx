import axios from "axios";
import { useState } from "react";

function Auth01() {
  
  const [ inputValue, setinputValue ] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  
  const [ inputMessage , setInputMessage] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  })
  
  const regexs = {
        username: {
            regex: /^[a-z0-9_-]{5,20}$/,
            message: "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
        },
        password: {
            regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9^A-Za-z0-9\W]{8,16}$/,
            message: "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
        },
        name: {
            regex: /^[가-힣]{2,6}$/,
            message: "이름: 2~6자의 한글을 사용해주세요.",
        },
        email: {
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "이메일 형식을 사용해주세요.",
        },
    }


  const handleInputOnChange = (e) => {
    setinputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

    if (regexs[e.target.name].test(e.target.value)) {
      setInputMessage({
        ...inputMessage,
        [e.target.name]: "",
      });
    } else {
      setInputMessage({
        ...inputMessage,
      [e.target.name]: regexs[e.target.name].message,
      });
    }
  }

  const handelSignupOnClick = () => {
      if (Object.values(inputMessage).map(message => !!message).includes(true)) {
        alert("입력하신 가입정보를 다시 확인하세요.")
        return;
      }
      signupRequest();
  }

  const signupRequest = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/signup", inputValue);
            console.log(response);
            alert("회원가입 완료!")
        } catch(error) {
            console.log(error);
        }
    }

    return <>
            <div>
                  <div>
                    <input type="text" placeholder="사용자이름" name="username" value={inputValue.username} onChange={handleInputOnChange} /> 
                        <span>{inputMessage.username}</span>
                  </div>
                  <div>
                  <input type="text" placeholder="비밀번호" name="password" value={inputValue.password} onChange={handleInputOnChange} />
                        <span>{inputMessage.password}</span>
                  </div>
                  <div>
                  <input type="text" placeholder="이름" name="name" value={inputValue.name} onChange={handleInputOnChange} />
                        <span>{inputMessage.name}</span>
                  </div>
                  <div>
                  <input type="text" placeholder="이메일" name="email" value={inputValue.email} onChange={handleInputOnChange} />
                        <span>{inputMessage.email}</span>
                  </div>
                  <button onClick={handelSignupOnClick}>가입하기</button>
            </div>
        </>
}

export default Auth01;