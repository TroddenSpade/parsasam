import React, { Component } from 'react';
import './App.css';

import Main from './components/main.js'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true
    }
  }
  render() {
    if(this.state.loading) return null;
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
  componentDidMount(){
    this.setState({
      loading:false,
    })
  }
}

export default App;
