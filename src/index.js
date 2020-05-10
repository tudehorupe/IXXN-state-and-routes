import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import "./App.css";
import curDot from "cursor-dot";

const $ = s => document.querySelector(s);

const cursor = curDot({
  easing: 4
});

cursor.over(".title", {
  background: "#fff"
});

cursor.over(".react1", {
  borderColor: "rgba(255,255,255,.38)"
});

cursor.over(".react2", {
  scale: 0.5,
  background: "#fff"
});

cursor.over($(".react3"), {
  scale: 1.4,
  background: "#faa2c1",
  borderColor: "transparent"
});




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
