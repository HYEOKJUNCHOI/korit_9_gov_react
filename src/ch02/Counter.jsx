import { useState } from "react";

function Counter() {
    let num = 0;
    // let numberState = useState(0);
    // let number = numberState[0];
    // let setNumber = numberState[1];
    let [number, setNumber] = useState(0);

    console.log(number);

    const increase = () => {
        num += 1;
        console.log(num);
    }

    const decrease = () => {
        num -= 1;
        console.log(num);
    }

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    console.log("카운터 화면 렌더링");

    return <div>
        <h1>{num}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>

        <h1>{number}</h1>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
    </div>
}

export default Counter;