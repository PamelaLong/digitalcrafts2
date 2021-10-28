import './App.css';
// import { useState } from 'react';
// import { useDispatch } from "react-redux";
// import Signup from "./components/Signup";
// import Movies from './components/Movies';


export default function App() {
  // const [Signup, setSignup] = useState({});
  // const dispatch = useDispatch();
  // const [movieTitle, setMovieTitle] = useSelector(state => state.movieTitle[props.movieTitle]);
  // const [SignupItem, setSignupItem] = useSelector(state => state.Signup[props.Signup]);
  return (
    <div className= "App">
      <h1>Welcome to Movies At Home</h1>
      <h2>Search for Movies Here</h2>
      {/* <Movies />
      <movieTitle /> */}

        {/* <Movies MovieTitle={movieTitle}setMovieTitle={setMovieTitle}/> */}

      {/* <Signup Signup={Signup}setSignup={setSignup}/> */}
      
      {/* <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" /> */}
      {/* <button onClick={() => dispatch({type: "movies"})}>Search</button> */}
      
    </div>

  )

};

// add this button to the bottom of the movie posters
// <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button>