import { useState } from "react";

function SearchName() {
    
  const profiles = [{name: "김준일", age: 32},{name: "김준이",age: 33},{name: "김준삼", age: 34}]  

  const [result, setResult] = useState("찾은 결과 없음");
  const [ inputValue, setInputValue ] = useState("");
    
  const handleNameOnChange = (e) => {
    setInputValue(e.target.value);
    setResult("찾은 결과 없음");
    
  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    if (profile.name === e.target.value) {
      setResult(profile.age);
      break;
    }
  }
  
    // forEach
    profiles.forEach((profile) => {
      if (profile.name === e.target.value);
    })
  
    //filter
    const foundProfiles = profiles.filter((profile) => {
      return profile.name === e.target.value;
    })

    if (!!foundProfiles.length) {
      setResult(foundProfiles[0].age);
    }

    //find
    const foundProfile = profiles.find((profile) => {
      return profile.name === e.target.value;
    });

    if(!!foundProfile) {
      setResult(foundProfile.age);
    }
    
  }

  return <>
  <div>
    <input type="text" placeholder="찾을 이름" onChange={handleNameOnChange}/>
    <h2>{result}</h2>
  </div>
  </>
}

export default SearchName;