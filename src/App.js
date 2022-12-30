import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBase from './components/NewsBase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/"  element={<NewsBase country="in" key="general" pageSize={6} category="general" />}/>
            <Route exact path="/business"  element={<NewsBase country="in" key="business" pageSize={6} category="business" />}/>
            <Route exact path="/entertainment"  element={<NewsBase country="in" key="entertainment" pageSize={6} category="entertainment" />}/>
            <Route exact path="/general"  element={<NewsBase country="in" key="general" pageSize={6} category="general" />}/>
            <Route exact path="/health"  element={<NewsBase country="in" key="health" pageSize={6} category="health" />}/>
            <Route exact path="/science"  element={<NewsBase country="in" key="science" pageSize={6} category="science" />}/>
            <Route exact path="/sports"  element={<NewsBase country="in" key="sports" pageSize={6} category="sports" />}/>
            <Route exact path="/technology"  element={<NewsBase country="in" key="technology" pageSize={6} category="technology" />}/>

          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
