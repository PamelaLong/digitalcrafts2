import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducer/rootReducers';
import { Provider } from 'react-redux';
// import Signup from './components/Signup';
// import Cart from './components/Cart';
// import logger from "react-logger";


// apply middlewares in rootReducers? logger?

const store = createStore(rootReducers)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    {/* <Signup />
    <Cart /> */}

    {/* <Signup SignupItem={SignupItem}
      setSignupItem={setSignupItem}/> */}

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);