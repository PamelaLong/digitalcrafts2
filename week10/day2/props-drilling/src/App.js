
import './App.css';
import Dealership from './components/dealership/Dealership';
import Neighborhood from './components/neighborhood/Neighborhood';

function App() {
  const mustang = "1967 Mustang Boss 302"
  return (
    <div className="box">
      <h1>props drilling</h1>
      <Neighborhood />
      <Dealership mustang={mustang}/>

    </div>
  );
}

export default App;
