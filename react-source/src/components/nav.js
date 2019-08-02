import React from 'react';

import './nav.css';
import pic from '../assets/pic.png';


export default class Nav extends React.Component {
    state={
        styles:[true,false,false,false,false],
    }
    pressed = (id)=>{
        var newStyles = [false,false,false,false,false];
        newStyles[id] = true;
        this.setState({
            styles:newStyles,
        });
    }
    componentWillReceiveProps(){
        this.pressed(this.props.getPage())
    }
    render(){
        return (
            <div className="navbar">
                <img className="img" src={pic} alt=""/>
                <div className="container highlightTextIn">
                    <a
                        style={this.state.styles[0] ? {color:"rgb(236, 106, 219)"} : null}
                        alt="HOME"
                        onClick={()=>this.props.first()}
                    >HOME</a>
                    <a
                        style={this.state.styles[1] ? {color:"rgb(236, 106, 219)"} : null}
                        alt="ABOUT"
                        onClick={()=>this.props.second()}                    
                    >ABOUT</a>
                    <a 
                        style={this.state.styles[2] ? {color:"rgb(236, 106, 219)"} : null}
                        alt="Projects"
                        onClick={()=>this.props.third()}                    
                    >Projects</a>
                    <a
                        style={this.state.styles[3] ? {color:"rgb(236, 106, 219)"} : null}
                        alt="Skills"
                        onClick={()=>this.props.forth()}                    
                    >Skills</a>
                    <a 
                        style={this.state.styles[4] ? {color:"rgb(236, 106, 219)"} : null}
                        alt="contact"
                        onClick={()=>this.props.fifth()}                    
                    >CONTACT</a>
                </div>
                
            </div>
        );
    }
};
