
import './App.css';
import Dealership from './components/dealership/Dealership';
import Neighborhood from './components/neighborhood/Neighborhood';
import {useState} from "react";

function App() {
  const mustang = useState("1967 Mustang Boss 302");
  const fordGT = "2021 Ford GT";

  return (
    <div className="box">
      <h1>props drilling</h1>
      {mustang}
      <Neighborhood mustang={mustang} />
      <Dealership mustang={mustang} fordGT={fordGT} />

    </div>
  );
}

export default App;
