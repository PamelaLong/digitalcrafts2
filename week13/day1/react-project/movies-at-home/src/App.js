import './App.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import SignUp from "./components/SignUp";
// import Movies from './components/Movies';


function App() {
  const inputValue = useState(0);
  const dispatch = useDispatch();
  const [SignUpItem, setSignUpItem] = useState({});
  // const [MoviesTitle, setMoviesTitle] = useSelector({});

  return (
    <div className= "App">
      <h1>Sign Up To Order Movies</h1>

        {/* <Movies MoviesTitle={MoviesTitle}
        setMoviesTitle={setMoviesTitle}/> */}

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