import { useState } from "react";
import UserInfoBox from "./UserInfoBox";
import { useUserInfo } from "./store/zustandStore";

function Zustand02() {
    const [ user, setUser ] = useState({
        username: "",
        email: "",
        phone: "",
    });
    /**
     * 사용자 정보를 입력받은 후 확인을 눌렀을 때 UserInfoBox 컴포넌트에서 출력
     */
    const { setUserInfo } = useUserInfo();

    const handleInputOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleOnClick = () => {
        setUserInfo(user);
    }

    return <div>
        <div>
            <input type="text" placeholder="사용자이름" name="username" value={user.username} onChange={handleInputOnChange}/>
            <input type="text" placeholder="이메일" name="email" value={user.email} onChange={handleInputOnChange}/>
            <input type="text" placeholder="연락처" name="phone" value={user.phone} onChange={handleInputOnChange}/>
            <button onClick={handleOnClick}>확인</button>
        </div>
        <UserInfoBox />
    </div>
}

export default Zustand02;