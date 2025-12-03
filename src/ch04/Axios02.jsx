import axios from "axios";
import { useState } from "react";

function Axios02() {
const [ inputValue, setInputValue ] = useState({
username: "",
});

const [ users, setUsers ] = useState([]);

const handleInputOnChange = (e) => {
const {name, value} = e.target;
setInputValue({
    ...inputValue,
    [name]: value,
});
}

const getUsersApi = async () => {
    const response = await axios.get("http://192.168.2.101:8080/users", 
        {params: {username:inputValue.username}});
    setUsers(response.data);
}

const handleSerchOnClick = () => {
    getUsersApi();
}

const handInputOnKeyDown = (e) => {
console.log(e)
if (e.keyCode === 13) {
    getUsersApi();
}
}

return <>
    <input type="text" 
    name="username" value={inputValue.username}
    onChange={handleInputOnChange} 
    onKeyDown={handInputOnKeyDown}/>
    <button onClick={handleSerchOnClick}>검색</button>
    <table>
        <thead>
            <tr>
                <th>username</th>
                <th>password</th>
                <th>name</th>
                <th>email</th>
                <th>role1</th>
                <th>role2</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(u => <tr>
                    <td>{u.username}</td>
                    <td>{u.password}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.roles[0]}</td>
                    <td>{u.roles[1]}</td>
                </tr>)
            }
        </tbody>
    </table>
    </>
}

export default Axios02;