import { useState } from "react";
import Signup from "./components/Signup";
import DB from "./components/DB";




function App() {
  const [SignupItem, setSignupItem] = useState({});
  const [SignupList,setSignupList] = useState([]);

  return (
    <div className="App">

      <h1>Sign Up Sheet</h1>

    <Signup SignupItem={SignupItem}
    setSignupItem={setSignupItem}/>
    
    <DB SignupList={SignupList}
    setSignupList={setSignupList}/>
    </div>
  );
};


export default App;
