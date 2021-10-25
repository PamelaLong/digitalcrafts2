import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducers from './reducer/rootReducers';
import { Provider } from 'react-redux';
// import logger from "react-logger";


// apply middlewares in rootReducers? logger?


const store = createStore(rootReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

