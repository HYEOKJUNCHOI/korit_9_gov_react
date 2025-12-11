/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const width = 100;

const box1 = css`
width :${width}px;
height: 100px;
background-color: black
`;

function Css01() {
    return <div css={box1}></div>}

export default Css01;