import JSXStudy from "./JSXStudy";


function App01() {
    const currentComponent = 1;

    const ComponentObj = {
      1: <JSXStudy />,
    }

    return ComponentObj[currentComponent];
}

export default App01;