import "./App.css";
import React from "react";
// import { useState } from 'react';
// import { useDispatch } from "react-redux";
import Halloween from "./components/Halloween";
import Marvel from "./components/Marvel";
import Superman from "./components/Superman";
import Batman from "./components/Batman";
import { MainContainer } from "./styled-components/AppStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BatmanContainer } from "./styled-components/BatmanStyle";

// import { createStore } from 'redux';

// const store = createStore();
// console.log(store.getState());

function App() {
  // const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <h1>Welcome to Movies At Home</h1>
        <h2>Search for Movies Here</h2>
      </div>
      <div className="Button">
        <button>Batman Movies</button>
        <button>Superman Movies</button>
        <button>Marvel Movies</button>
        <button>Halloween Movies</button>
      </div>
      <Switch>
        <MainContainer>
          <Route path="/Halloween">
            <Halloween />
          </Route>

          <Route path="/Marvel">
            <Marvel />
          </Route>

          <Route path="/Superman">
            <Superman />
          </Route>

          <Route path="/Batman">
            <Batman />
          </Route>

          <Route path="/BatmanContainer">
            <BatmanContainer />
          </Route>
          {/* <Route path="*">
          <Redirect to="/errorpage" />
        </Route>
        <Route path="/errorpage">
          <ErrorPage />
        </Route> */}
        </MainContainer>
      </Switch>
    </Router>
  );
}
export default App;
// add this button to the bottom of the movie posters
