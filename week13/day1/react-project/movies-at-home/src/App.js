import './App.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
// import movieTitle from './components/movieTitle';
// import movieContainer from './components/movieContainer';
import SignUp from "./components/signUp";




function App() {
  const inputValue = useState(0);
  const dispatch = useDispatch();
  const [SignUpItem, setSignUpItem] = useState({});
  // const movieTitle = useSelector((state) => state.movieTitle);

  return (
    <div className= "App">
      {/* <div>
      <script src="movieAPI.js"></script>
      </div> */}
      <h1>Sign Up</h1>
      
      <SignUp SignUpItem={SignUpItem}
      setSignUpItem={setSignUpItem}/>
      
      <input onChange={(e) => inputValue(parseInt(e.target.value))} type= "movie" />
      <button onClick={() => dispatch({type: "movieTitle"})}>Search</button>
      {/* add this button to the bottom of the movie posters
      <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button> */}
    </div>
  )

};

export default App;
