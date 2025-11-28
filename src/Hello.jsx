import React, { Component } from 'react';

// 컴포넌트 만드세요 -> src 폴더 안에 대문자로 시작하는 기능을 만들겠다는 의미
// 무조건 함수 만들거고 -> 만들어진 함수를 export 할거임.
// 컴포넌트는 앞대문자로 생성 , 컴포넌트명 = 파일명 동일하게 , 태그를 리턴한다, 태그 = jsx
// 값이 두개이상이면 감싸야한다.

function Hello() {
  return <div>안녕하세요.</div>
}

export default Hello;