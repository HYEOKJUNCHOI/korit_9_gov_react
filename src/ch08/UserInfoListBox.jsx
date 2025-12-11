import { useUserInfo, useUserInfoList } from "./store/zustandStore";

function UserInfoListBox() {
    const {userInfoList} = useUserInfoList();

    return <ul>
        {
            userInfoList.map(userInfo => <>
                <li>사용자명: {userInfo.username}</li>
                <li>이메일: {userInfo.email}</li>
                <li>연락처: {userInfo.phone}</li>
            </>)
        }
        
    </ul>
}

export default UserInfoListBox;