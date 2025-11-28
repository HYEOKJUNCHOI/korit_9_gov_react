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
    serchname: <SearchName/>,
    inputs: <Inputs/>,
    counter: <Counter />,
    counter_30year:<Counter_30year/>,
}
const currentApp = "ch03_3";
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