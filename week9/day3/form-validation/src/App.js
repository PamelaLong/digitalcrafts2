import { useState } from "react";
import Form from "./component/Form";
import TodoList from "./components/TodoList";
// useState is a hook
//state = {
// counter: 0,
// username: "",
// pokemon:[{id: 1, name: "pikachu"}]
//}


function App() {

const [counter,setCounter] = useState(0);
const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <h1>hooks and form-validation</h1>

      <p>User is {userName}</p>
      <input onChange={(e) => setUserName(e.target.value)} type="type" placeholder="Type a username here" />
      <div>
      <p> Counter is: {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Add</button>
      <button onClick={()=>setCounter(counter-1)}>Subtract</button>
      </div>

      <form action="">
      <input type="text"></input>
      <input type="text"></input>
      <input type="button" value="Send"/>
      </form>
    </div>
    // <Form/>
    // <TodoList/>
  );
}

export default App;
