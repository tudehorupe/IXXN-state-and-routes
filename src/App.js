import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import curDot from 'cursor-dot';

import { GlobalContextProvider } from "./context/Context";

import Welcome from "./pages/js/Welcome";
import Home from "./pages/js/Home";
import Page1 from "./pages/js/Page1";
import Nav from "./components/js/Nav";
import ColourPage from "./pages/js/ColourPage";
import Clock from "./pages/js/Clock";
import ClockWithHooks from "./pages/js/ClockWithHooks";
import DynamicPage from './pages/js/DynamicPage';
import DarkMode from './pages/js/DarkMode';



function App() {
  return (
    <GlobalContextProvider>
    <div className="App">

    <Router>
      <Nav />

      <Route path="/welcome" component={Welcome} />
      <Route path="/Home" component={Home} />
      <Route path="/Pageone" component={Page1} />
      <Route path="/colourpage" component={ColourPage} />
      <Route path="/clock" component={Clock} />
      <Route path="/clockwithhooks" component={ClockWithHooks} />
      <Route path="/darkmode" component={DarkMode} />


      <Route path="/dynamic/:name" component={DynamicPage} />

      




    </Router>

    </div>
    </GlobalContextProvider>
  );
}

export default App;
