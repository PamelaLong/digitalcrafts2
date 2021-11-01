import './App.css';
import React from 'react';
// import { useState } from 'react';
// import { useDispatch } from "react-redux";
import Halloween from './components/Halloween';
import Marvel from './components/Marvel';
import Superman from './components/Superman';
import Batman from './components/Batman';
import { MainContainer } from './styled-components/AppStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { createStore } from 'redux';

// const store = createStore();
// console.log(store.getState());


function App() {
  // const dispatch = useDispatch();
  // const [movieTitle, setMovieTitle] = useSelector(state => state.movieTitle[props.movieTitle]);
  return (
    <Router>

    <div className= "App">
      <h1>Welcome to Movies At Home</h1>
      <h2>Search for Movies Here</h2>
    </div>
      <Switch>

    <MainContainer>

      <Route path="/Halloween">
        <Halloween/>
        </Route>

      <Route path="Marvel">
        <Marvel />
        </Route>

      <Route path="Superman">
        <Superman />
        </Route>

      <Route path="Batman">
        <Batman />
        </Route>

{/* <Route path="*">
          <Redirect to="/errorpage" />
        </Route>
        <Route path="/errorpage">
          <ErrorPage />
        </Route> */}


      {/* <button className="click">Movie Info</button> */}
      </MainContainer>
    </Switch>
    </Router>
  )

};
export default App;
// add this button to the bottom of the movie posters
// <button onClick={() => dispatch({type: "movieTitle"})}>Add To Cart</button>
