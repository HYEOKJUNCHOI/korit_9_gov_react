
import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";
import Counter_30year from "./ch01/Counter_30year";
import App02_4 from "./ch02/App02_4";
import App02_5 from "./ch02/App02_5";
import App02__4 from "./ch02/App02__4";
import Inputs from "./ch02/Inputs";
import SearchName from "./ch02/SearchName";
import UseEffect01 from "./ch03/UseEffect01";
import UseEffect02 from "./ch03/UseEffect02";
import UseEffect03 from "./ch03/UseEffect03";
import UseEffect04 from "./ch03/UseEffect04";
import Axios01 from "./ch04/Axios01";
import Promise01 from "./ch04/Promise01";
import Axios02 from "./ch04/Axios02";
import Axios02_2 from "./ch04/Axios02_2";
import Axios03 from "./ch04/Axios03";
import Axios04 from "./ch04/Axios04";
import Axios05 from "./ch04/Axios05";
import Auth01 from "./ch05/Auth01";
import Auth02 from "./ch05/Auth02";
import Router01 from "./ch06/Router01";
import Router02 from "./ch06/Router02";
import Router03 from "./ch06/Router03";
import Router04 from "./ch06/Router04";
import Router05 from "./ch06/Router05";
import Css from "./ch07/Css";
import Css02 from "./ch07/Css02";
import Zustand01 from "./ch08/Zustand01";
import Zustand02 from "./ch08/Zustand02";
import Zustand03 from "./ch08/Zustand03";
import ReactQuery01 from "./ch09/ReactQuery01";

/////////////////////////////////////////

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2/>,
    ch02_3: <App02_3/>,
    ch02_4: <App02_4/>,
    ch02__4:<App02__4/>,
    ch02_5: <App02_5/>,
    ch03: <UseEffect01/>,
    ch03_2: <UseEffect02/>,
    ch03_3: <UseEffect03/>,
    ch03_4: <UseEffect04/>,
    ch04:<Axios01/>,
    ch04_1:<Promise01/>,
    ch04_2:<Axios02/>,
    ch04_2_2:<Axios02_2/>,
    ch04_2_3:<Axios03/>,
    ch04_2_4:<Axios04/>,
    ch04_2_5:<Axios05/>,
    ch05_1:<Auth01/>,
    ch05_2:<Auth02/>,
    ch06_1:<Router01/>,
    ch06_2:<Router02/>,
    ch06_3:<Router03/>,
    ch06_4:<Router04/>,
    ch06_5:<Router05/>,
    ch07_1: <Css/>,
    ch07_2:<Css02/>,
    ch08_1:<Zustand01/>,
    ch08_2:<Zustand02/>,
    ch08_3:<Zustand03/>,
    ch09_1:<ReactQuery01/>,
    
    serchname: <SearchName/>,
    inputs: <Inputs/>,
    counter: <Counter />,
    counter_30year:<Counter_30year/>,

}
const currentApp = "ch09_1";
const root = document.getElementById("root");
createRoot(root).render(appObj[currentApp]);

// createRoot(document.getElementById('root')).render(appObj.ch02_3); //위에랑 같은거

function BoxComponent() {
    // return <div>
    //     <TitleComponent title="타이틀" title2="타이틀2"/>
    //     </div>
    // return <div>{TitleComponent({title: "타이틀", title2: "타이틀2"})}</div>
    return <div><TitleComponent title="타이틀" title2="타이틀2"/></div>
}

function TitleComponent({title, title2}) {  // 컴포넌트는 구분하기위해 첫대문자 사용
    console.log(title);
    console.log(title2);
    return <h1>[title]</h1>
} // => <TitleComponent/> or <TitleComponent></TitleComponent> 로 변환해서 사용