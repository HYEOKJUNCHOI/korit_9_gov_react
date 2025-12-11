import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

//네비게이션
function Router03() {
    return <BrowserRouter>
        <Layout />
    </BrowserRouter>
}

function Layout() {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        navigate(`/${e.target.id}`);
    }

    return <div>
        <header>
            <h1 id="home" onClick={handleOnClick}>홈로고</h1>
            <button id="board" onClick={handleOnClick}>게시판</button>
            <button id="customer-center" onClick={handleOnClick}>고객센터</button>
            <button id="user-information" onClick={handleOnClick}>사용자정보</button>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/board" element={<Board />}/>
            <Route path="/customer-center" element={<CustomerCenter />} />
            <Route path="/user-information" element={<UserInformation />} />
        </Routes>
    </div>
}

function Home() {
    return <h1>홈 화면</h1>
}

function Board() {
    return <h1>게시판 화면</h1>
}

function CustomerCenter() {
    return <h1>고객센터 화면</h1>
}

function UserInformation() {
    return <h1>사용자정보 화면</h1>
}

export default Router03;