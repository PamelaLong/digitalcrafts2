import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";


// const store =createStore(rootReducer, applyMiddlewares(logger, thunk))
const store =createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

