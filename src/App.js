import React, { Component, Profiler } from 'react';
import Menutop from './components/Menutop.js';
import Menubot from './components/Menubot.js';
import ChangeURL from './router/ChangeURL.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="wrapper">

          <div id="menu">
            <Menutop />
            <Menubot/>
          </div>
          <ChangeURL />

        </div>
      </Router>
    );
  }
}

export default (App);
