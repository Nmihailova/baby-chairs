import React, { Component } from 'react';

import MainPage from './components/main/MainPageComponent';
import axios from 'axios';
import './App.scss';
const HOST = "http://localhost:3001";



class App extends Component {
  render () {
    return (
      <div className="App">
        <MainPage />
      </div>
    )
  }
}

export default App;
