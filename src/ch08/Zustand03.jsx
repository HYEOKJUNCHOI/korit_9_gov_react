import { useState } from "react";
import UserInfoBox from "./UserInfoBox";
import { useUserInfo, useUserInfoList } from "./store/zustandStore";
import UserInfoListBox from "./UserInfoListBox";

function Zustand03() {
    const [ user, setUser ] = useState({
        username: "",
        email: "",
        phone: "",
    });
    /**
     * 사용자 정보를 입력받은 후 확인을 눌렀을 때 UserInfoBox 컴포넌트에서 출력
     */
    const { setUserInfoList } = useUserInfoList();

    const handleInputOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const handleOnClick = () => {
        setUserInfoList(user);
    }

    return <div>
        <div>
            <input type="text" placeholder="사용자이름" name="username" value={user.username} onChange={handleInputOnChange}/>
            <input type="text" placeholder="이메일" name="email" value={user.email} onChange={handleInputOnChange}/>
            <input type="text" placeholder="연락처" name="phone" value={user.phone} onChange={handleInputOnChange}/>
            <button onClick={handleOnClick}>추가</button>
        </div>
        <UserInfoListBox />
    </div>
}

export default Zustand03;