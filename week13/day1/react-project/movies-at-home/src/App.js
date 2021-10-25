import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import movieTitle from './components/movieTitle';
import movieContainer from './components/movieContainer';



function App() {
  const inputValue = useState(0);
  const dispatch = useDispatch();


  return (
    <div className= "Movie">
      <h1>Movies</h1>
      <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" />
      <button onClick={() => dispatch({type: "Add to Cart"})}></button>
    </div>
  )

};

export default App;
