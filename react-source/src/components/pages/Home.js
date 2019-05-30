import React from "react";
import './pages.css' ;
import pic from '../../assets/logo.png';

export default () => {
    return (
        <div className="reactPageScrollerComponent first-component">
            <img className="img" src={pic} alt=""/>
        </div>
    )
}