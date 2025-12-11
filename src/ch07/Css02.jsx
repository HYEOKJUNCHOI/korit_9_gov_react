/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
`;

const box2 = () => {

    return css`
        width: 100px;
        height: 100px;
        background-color: blue;
    `;
}

const box3 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;

const box4 = (left) => css`
    width: 100px;
    height: 100px;
    background-color: green;
    position: relative;
    left: ${left}px;
    transition: left 1s ease-in-out;
`;

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    box-sizing: border-box;
    border: 1px solid #2600ff;
    padding: 20px;
    width: 500px;
    height: 650px;
`;

const buttonController = css`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    background-color: #00000016;
`;

const controllerTop = css`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;
const controllerMiddle = css`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`;
const controllerBottom = css`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;
const button = css`
    width: 50px;
    height: 50px;
`;
const boxContainer = css`
    position: relative;
    margin-top: 20px;
    box-sizing: border-box;
    border:5px solid #a30000;
    width: 100%;
    flex-grow: 1;
`;
const movingBox = (position) => css`
    position: absolute;
    top: calc(${position.top}% - ${position.top}px);
    left: calc(${position.left}% - ${position.left}px);
    width: 100px;
    height: 100px;
    background-color: #24ec3591;
    border: 1px solid #222;
    transition: all 1s ease-in-out;
`;

function Css02() {
    const [ color, setColor ] = useState("#000000");
    const [ left, setLeft ] = useState(0);
    const [ position, setPosition] = useState({
        top: 0,
        left: 0,
    })

    const handleMoveOnClick = () => {
        setLeft(left === 0 ? 700 : 0);
    }

    const handleMoveButtonOnClick = (e) => {
        const positionValue = {
            hight: 0,
            low: 100,
            left: 0,
            right: 100,
        }
        if (["hight", "low"].includes(e.target.id)) {
            setPosition({
                ...position,
                top: positionValue[e.target.id],
            });
        } else {
            setPosition({
                ...position,
                left: positionValue[e.target.id],
            });
        }
    }

    return <>
        <button onClick={() => setColor("red")}>빨</button>
        <button onClick={() => setColor("orange")}>주</button>
        <button onClick={() => setColor("yellow")}>노</button>
        <div css={box1}></div>
        <div css={box2()}></div>
        <div css={box3(color)}></div>
        <button onClick={handleMoveOnClick}>이동</button>
        <div css={box4(left)}></div>

        <div css={container}>
            <div css={buttonController}>
                <div css={controllerTop}>
                    <button id="hight" css={button} onClick={handleMoveButtonOnClick}>상</button>
                </div>
                <div css={controllerMiddle}>
                    <button id="left" css={button} onClick={handleMoveButtonOnClick}>좌</button>
                    <button id="right" css={button} onClick={handleMoveButtonOnClick}>우</button>
                </div>
                <div css={controllerBottom}>
                    <button id="low" css={button} onClick={handleMoveButtonOnClick}>하</button>
                </div>
            </div>
            <div css={boxContainer}>
                <div css={movingBox(position)}></div>
            </div>
        </div>
    </>
}

export default Css02;