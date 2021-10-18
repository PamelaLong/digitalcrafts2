import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Square from './components/Square';
// import Game from './components/Game';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Square />
    {/* <Game /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

