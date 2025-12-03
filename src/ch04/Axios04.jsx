import axios from "axios";

function Axios04() {

  const api = axios.create({
    baseURL:"http://localhost:8080",
  });


  const reqGetOnClick1 = () =>{
    api.get("/req/data1?a=aaaaa&b=10");
  } 
  const reqGetOnClick2 = () =>{
    api.get("/req/data2", {
      params: {
        a: "abc",
        b: 1000,
      },
    });
  } 
  
const reqGetOnClick3 = () => {
  api.get("/req/data3", {
    params: {
      name:"김준일",
      age:32,
    },
  });
}   

const reqGetOnClick7 = () => {
  api.get("/req/abc/data7/20", {
    params: {
      name: "김준일",
      age: 32,
    },
  });
}

const reqPostOnClick1 = () => {
  const data = {
    name: "test",
    age: 32,
    address: "test address",
  }

  // Object -> JSON 
  const jsonData = JSON.stringify(data);
  // JSON -> Object
  const obj = JSON.parse(jsonData);

// axios는  자동으로 JSON 변환
  api.post("/req/data1", data);
}

const reqPostOnClick2 = () => {
  api.post("/req/data2", {
    name: "최다솔",
    age: 5,
  });
}

const reqPostOnClick3 = () => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");

    inputElement.onchange = (e) => {
        const {files} = e.target;
        const [file] = files;

        const formData = new FormData();
        formData.append("file", file);
        api.post("/req/data3", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }
    inputElement.click();
}

const reqPostOnClick4 = () => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");

    inputElement.onchange = (e) => {
        const {files} = e.target;
        const [file] = files;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", "김준일");
        formData.append("age", 32);
        
        api.post("/req/data4", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }
    inputElement.click();
}

const reqPostOnClick5 = () => {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "file");
  inputElement.setAttribute("multiple, true");

  inputElement.onchange = (e) => {
    const {files} = e.target;
    const fileList = Array.from(files);

    const formData = new FormData();
    fileList.forEach(file => formData.append("files", file));


    api.post("/req/data5", formData);
  }

  inputElement.click();
}


const reqPutOnClick = () => {
  api.put("/req/data1/30", {
    name : "김준이",
    age : 33,
  });
}

const reqPatchOnClick = () => {
  api.patch("/req/data1/30", {
    name : "김준사",
    age : 36,
  });
}

const reqDeleteOnClick = () =>{
  api.delete("/req/data1/20", {
      data:{
          name: "김준일",
      }  
    });
}
      return <>
            <button onClick={reqGetOnClick1}>reqGet1</button>
            <button onClick={reqGetOnClick2}>reqGet2</button>
            <button onClick={reqGetOnClick3}>reqGet3</button>
            <button onClick={reqGetOnClick7}>reqGet7</button>
            <br/>
            <button onClick={reqPostOnClick1}>reqPost1</button>
            <button onClick={reqPostOnClick2}>reqPost2</button>
            <button onClick={reqPostOnClick3}>reqPost3</button>
            <button onClick={reqPostOnClick4}>reqPost4</button>
            <button onClick={reqPostOnClick5}>reqPost5</button>
            <br/>
            <button onClick={reqPutOnClick}>reqPut</button>
            <br/>
            <button onClick={reqPatchOnClick}>reqPatch</button>
            <br/>
            <button onClick={reqDeleteOnClick}>reqDelete</button>
            <br/>
        </>
}

export default Axios04;