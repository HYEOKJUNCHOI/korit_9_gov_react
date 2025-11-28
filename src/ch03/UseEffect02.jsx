function UseEffect02() {

  let v = undefined;

  const useState = (initValue) => {
    v = initValue;
    const setter = (value) => {
      v = value;
    }
    return [ v, setter ];
  }

  const Componnet = () => {
    const [num, setNum ] = useState(0);
    console.log(num);

    const onClick = () => {
      setNum(num + 1);
      console.log(num);
    }
    return <div>{num}</div>
  }

  Componnet();

    return <></>
}

export default UseEffect02;