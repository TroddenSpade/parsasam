import React from "react";
import './pages.css' ;
import './contact.css';
import car from '../../assets/car.png';
import sun from '../../assets/sun.png';
import submit from '../../assets/submit.png';

import github from '../../assets/GitHub-Mark-32px.png';
import telegram from '../../assets/telegram.png';
import steam from '../../assets/steam.png';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    state={
        name:'',
        email:'',
        massage:'',
    }
    handleName = (event)=>{
        this.setState({
            name:event.target.value,
        })
    }
    handleEmail = (event)=>{
        this.setState({
            email:event.target.value,
        })
    }
    handleMassage = (event)=>{
        this.setState({
            massage:event.target.value,
        })
    }

    handleButton =()=>{
        console.log("pressed")
    }

    componentWillReceiveProps(props){
        if(props.getPage() == 4){
            document.getElementById('sun').className ='sun';
            document.getElementById('input').className ='input';
            document.getElementById('email').className ='email';
            document.getElementById('massage').className ='massage';
        }else{
            document.getElementById('sun').className ='sun-static';
            document.getElementById('input').className ='input-static';
            document.getElementById('email').className ='email-static';
            document.getElementById('massage').className ='massage-static';         
        }
    }

    render(){
        return (
            <div className="reactPageScrollerComponent fifth-component">
                <div className="picture">
                    <img id="sun" src={sun} alt=""/>
                    <img className="car" src={car} alt=""/>
                </div>
                <div className="contact" >
                    <textarea id="input" type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleName} />
                    <textarea id="email" type="text" placeholder="Your E-mail" value={this.state.email} onChange={this.handleEmail} />
                    <textarea id="massage" type="text" placeholder="Massage" value={this.state.massage} onChange={this.handleMassage} />

                    <img className="submit" src={submit} alt="my image" onClick={this.handleButton} />
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
            </div>
        )
    }
}