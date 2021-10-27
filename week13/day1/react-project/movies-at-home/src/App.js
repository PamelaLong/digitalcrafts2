import './App.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import Signup from "./components/Signup";
import Movies from './components/Movies';


function App(props) {
  const inputValue = useState(0);
  const dispatch = useDispatch();
  const [SignupItem, setSignupItem] = useState({});
  // const [movieTitle, setMovieTitle] = useSelector(state => state.movieTitle[props.movieTitle]);
  // const [SignupItem, setSignupItem] = useSelector(state => state.Signup[props.Signup]);
  return (
    <div className= "App">
      <h1>Welcome to Movies At Home</h1>
      <h2>Sign Up To Order Movies</h2>
      {/* <Movies />
      <movieTitle /> */}

        {/* <Movies MovieTitle={movieTitle}
        setMovieTitle={setMovieTitle}/> */}

      <Signup SignupItem={SignupItem}
      setSignupItem={setSignupItem}/>
      
      {/* <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" /> */}
      {/* <button onClick={() => dispatch({type: "movies"})}>Search</button> */}
      
    </div>

  )

};

export default App;

// add this button to the bottom of the movie posters
// <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button>