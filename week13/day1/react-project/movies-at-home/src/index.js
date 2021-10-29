import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from"./reducer/rootReducers";
import { Provider } from 'react-redux';
import logger from "redux-logger";


const store = createStore(rootReducers, applyMiddleware(logger))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);