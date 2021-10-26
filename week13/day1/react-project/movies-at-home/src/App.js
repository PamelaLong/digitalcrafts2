import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import movieTitle from './components/movieTitle';
// import MovieContainer from './components/MovieContainer';
import SignUp from "./components/SignUp";
import MovieContainer from './components/MovieContainer';




function App() {
  const inputValue = useState(0);
  const dispatch = useDispatch();
  const [SignUpItem, setSignUpItem] = useState({});
  const [Movies, setMovies] = useSelector((state) => state.movie);

  return (
    <div className= "App">
      <h1>Sign Up To Order Movies</h1>

        <MovieContainer Movies={Movies}
        setMovies={setMovies}/>

      <SignUp SignUpItem={SignUpItem}
      setSignUpItem={setSignUpItem}/>
      
      <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" />
      <button onClick={() => dispatch({type: "movies"})}>Search</button>
      
    </div>

  )

};

export default App;

// add this button to the bottom of the movie posters
// <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button>