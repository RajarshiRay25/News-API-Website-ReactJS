import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBase from './components/NewsBase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><NewsBase key="1" country="in" pageSize={6} category="general" /></Route>
            <Route exact path="/business"><NewsBase key="2" country="in" pageSize={6} category="business"/></Route>
            <Route exact path="/entertainment"><NewsBase key="3" country="in" pageSize={6} category="entertainment" /></Route>
            <Route exact path="/general"><NewsBase key="4" country="in" pageSize={6} category="general" /></Route>
            <Route exact path="/health"><NewsBase key="5" country="in" pageSize={6} category="health" /></Route>
            <Route exact path="/science"><NewsBase key="6" country="in" pageSize={6} category="science" /></Route>
            <Route exact path="/sports"><NewsBase key="7" country="in" pageSize={6} category="sports" /></Route>
            <Route exact path="/technology"><NewsBase key="8" country="in" pageSize={6} category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
