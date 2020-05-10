import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import curDot from 'cursor-dot';

import Welcome from "./pages/js/Welcome";
import Home from "./pages/js/Home";
import Page1 from "./pages/js/Page1";
import Nav from "./components/js/Nav";


function App() {
  return (
    <div className="App">

    <Router>
      <Nav />

      <Route path="/welcome" component={Welcome} />
      <Route path="/Home" component={Home} />
      <Route path="/Pageone" component={Page1} />


    </Router>

    </div>
  );
}

export default App;
