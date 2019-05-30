import React from 'react';

import './nav.css';
import pic from '../assets/pic.png';
import github from '../assets/GitHub-Mark-Light-32px.png';
import telegram from '../assets/telegram.png';
import steam from '../assets/steam.png';

export default class Nav extends React.Component {
    render(){
        return (
            <div className="navbar">
                <img className="img" src={pic} alt=""/>
                <div className="container highlightTextIn">
                    <a
                        alt="HOME"
                        onClick={this.props.first}
                    >HOME</a>
                    <a
                        alt="ABOUT"
                        onClick={this.props.second}
                    >ABOUT</a>
                    <a 
                        alt="Projects"
                        onClick={this.props.third}
                    >Projects</a>
                    <a
                        alt="Skills"
                        onClick={this.props.forth}
                    >Skills</a>
                    <a 
                        alt="contact"
                        onClick={this.props.fifth}
                    >CONTACT</a>
                </div>
                <div className="icons">
                    <a alt="Gihub" href="https://github.com/TroddenSpade" target="_blank">
                        <img className="icon" src={github} alt=""/>
                    </a> 
                    <a alt="Telegram" href="https://t.me/modifies" target="_blank">
                        <img className="icon" src={telegram} alt=""/>
                    </a>
                    <a alt="Steam" href="https://steamcommunity.com/profiles/76561198275819165" target="_blank">
                        <img className="icon" src={steam} alt=""/>
                    </a> 
                </div>
            </div>
        );
    }
};
