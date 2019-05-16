import React from 'react';
import './nav.css';
import pic from '../assets/pic.png';
import github from '../assets/GitHub-Mark-Light-32px.png';
import telegram from '../assets/telegram.png';
import steam from '../assets/steam.png';

export default () => {
    return (
        <div className="navbar">
            <img className="img" src={pic} alt=""/>
            <div className="container highlightTextIn">
                <a alt="HOME">HOME</a>
                <a alt="ARTICLES">ARTICLES</a>
                <a alt="PORTFOLIO">PORTFOLIO</a>
                <a alt="ABOUT">ABOUT</a>
                <a alt="contact">CONTACT</a>
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
};
