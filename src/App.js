import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import curDot from 'cursor-dot';

import Welcome from "./pages/js/Welcome";
import Home from "./pages/js/Home";
import Page1 from "./pages/js/Page1";
import Nav from "./components/js/Nav";
import ColourPage from "./pages/js/ColourPage";
import Clock from "./pages/js/Clock";
import DynamicPage from './pages/js/DynamicPage';


function App() {
  return (
    <div className="App">

    <Router>
      <Nav />

      <Route path="/welcome" component={Welcome} />
      <Route path="/Home" component={Home} />
      <Route path="/Pageone" component={Page1} />
      <Route path="/colourpage" component={ColourPage} />
      <Route path="/clock" component={Clock} />
      <Route path="/dynamic/:name" component={DynamicPage} />

      




    </Router>

    </div>
  );
}

export default App;
