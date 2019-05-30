import React from "react";
import './pages.css' ;
import pic from '../../assets/logo.png';

export default () => {
    return (
        <div className="component first-component">
            <img className="img" src={pic} alt=""/>
        </div>
    )
}