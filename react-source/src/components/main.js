import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import './main.css';

import Nav from './nav.js';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default class Main extends Component {
  state = {
    page:0,
  }

  pageOnChange = (num)=>{
    this.setState({
      page:num
    });
  }

  getPage = ()=>{
    return this.state.page-1;
  }

  componentDidMount(){
    this.reactPageScroller.goToPage(4);
  }

  render() {
    return (
      <div className="main">
        <Nav
          first={()=>this.reactPageScroller.goToPage(0)}
          second={()=>this.reactPageScroller.goToPage(1)}
          third={()=>this.reactPageScroller.goToPage(2)}
          forth={()=>this.reactPageScroller.goToPage(3)}
          fifth={()=>this.reactPageScroller.goToPage(4)}
          getPage={this.getPage}
        />
        <div className="scrollerContainer">
          <ReactPageScroller
            ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}
            containerWidth={"90vw"} containerHeight={"100vh"}
          >
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact getPage={this.getPage}/>
          </ReactPageScroller>
        </div>
      </div>
    );
  }

}
