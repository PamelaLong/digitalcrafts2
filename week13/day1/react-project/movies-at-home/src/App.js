import './App.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
// import movieTitle from './components/movieTitle';
// import movieContainer from './components/movieContainer';



function App() {
  const inputValue = useState(0);
  const dispatch = useDispatch();
  // const movieTitle = useSelector((state) => state.movieTitle);

  return (
    <div className= "Movie">
      <h1>Search Movies</h1>
      <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" />
      <button onClick={() => dispatch({type: "movieTitle"})}>Search</button>
      {/* add this button to the bottom of the movie posters
      <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button> */}
    </div>
  )

};

export default App;
