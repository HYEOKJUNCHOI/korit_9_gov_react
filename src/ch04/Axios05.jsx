import axios from "axios";
import { useState } from "react";


function Axios05() {

  const api = axios.create({
    baseURL: "http://localhost:8080/",
  });

const [resp1Data , setResp1Data] = useState("");
const [resp2Data , setResp2Data] = useState({});
const [resp3Data , setResp3Data] = useState([]);
const [resp4Data , setResp4Data] = useState({
  name: "",
  email: "",
  strs: [],
  respJsonDto2: {
    address1: "",
    address2: "",
  }
});


const resp1Onclick = () => {
  api.get("/resp/data1")
  .then((axiosResponse) => {
    console.log(axiosResponse);
    setResp1Data(axiosResponse.data);
  });
}

const resp2Onclick = () =>{
  api.get("/resp/data2")
  .then((axiosResponse) => {
    console.log(axiosResponse)
    setResp2Data(axiosResponse.data)
  })
}

const resp3Onclick = () =>{
  api.get("/resp/data3")
  .then((axiosResponse) => {
    console.log(axiosResponse)
    setResp3Data(axiosResponse.data);
    })
}

const resp4Onclick = () =>{
  api.get("/resp/data4")
  .then((axiosResponse) => {
    console.log(axiosResponse)
    setResp4Data(axiosResponse.data)
  })
}


    return <> 
    <div>
      <button onClick={resp1Onclick}>resp1</button>
      <span>{resp1Data}</span>
    </div>

    <div>
      <button onClick={resp2Onclick}>resp2</button>

      <span>
        key1 : {resp2Data.key1}, key2 : {resp2Data.key2}
      </span>
      <br/>
      <span>
        {Object.entries(resp2Data).map(([key, value]) => {
          return `${key}: ${value} `;
        })}
      </span>
    </div>

            <div>
              <button onClick={resp3Onclick}>resp3</button>
                {
                  resp3Data.map(data => <span>{data * 10}</span>)
                }
            </div>

          <div>
            <button onClick={resp4Onclick}>resp4</button>
            <ul>
              <li>이메일 : {resp4Data.email} </li>
              <li>이름 : {resp4Data.name} </li>
              <li>strs : {resp4Data.strs} </li>
              <li>address1 : {resp4Data.respJsonDto2.address1 || "주소없음"} </li>
              <li>address2 : {resp4Data.respJsonDto2.address2 || "주소없음"} </li>
            </ul>
          </div>

          <div>
            <a href="http://localhost:8080/resp/data5?filename=download_test.txt">download_test.txt</a>
          </div>

          <div>
            <a href="http://localhost:8080/resp/data6?filename=테스트.txt">테스트.txt</a>
          </div>
        </>
}

export default Axios05;