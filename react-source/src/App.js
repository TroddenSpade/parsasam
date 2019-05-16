import React, { Component } from 'react';
import './App.css';

import Main from './components/main.js'; 
import Nav from './components/nav.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main/>
        <Nav />
      </div>
    );
  }
}

export default App;
