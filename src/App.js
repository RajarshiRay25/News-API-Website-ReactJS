import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBase from './components/NewsBase';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <NewsBase country="in" pageSize={6} category="science"/>
      </>
    )
  }
}

export default App
