import React from "react";
import axios from 'axios';
import './pages.css' ;
import './contact.css';
import car from '../../assets/car.png';
import sun from '../../assets/sun.png';
import submit from '../../assets/submit.png';
import github from '../../assets/GitHub-Mark-32px.png';
import telegram from '../../assets/telegram.png';
import steam from '../../assets/steam.png';

const SERVER = "https://hiimparsa.firebaseio.com/Messages.json";

export default class Contact extends React.Component{
    state={
        name:'',
        email:'',
        message:'',
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
    handlemessage = (event)=>{
        this.setState({
            message:event.target.value,
        })
    }

    handleButton =()=>{
        document.getElementById('input').className ='input-static';
        document.getElementById('email').className ='email-static';
        document.getElementById('message').className ='message-static';

        if(this.state.name.trim() == ''){
            document.getElementById('input').className = 'input-red';
        }
        if(this.state.email.trim() == ''){
            document.getElementById('email').className = 'email-red';
        }
        if(this.state.message.trim() == ''){
            document.getElementById('message').className = 'message-red';
        }
        if(this.state.name.trim() != '' &&
        this.state.email.trim() != '' &&
        this.state.message.trim() != '' ){
            axios.post(SERVER,this.state)
            .then(()=>alert("Thanks for being awesome!\nI will reply by email as soon as possible"))
            .catch((e)=>alert(e+"\nThis service is not available from embargoed countries"));
        }else{
            alert("Please fill out the empty Fields");
        }
    }

    componentWillReceiveProps(props){
        if(props.getPage() == 4){
            document.getElementById('sun').className ='sun';
            document.getElementById('input').className ='input';
            document.getElementById('email').className ='email';
            document.getElementById('message').className ='message';
        }else{
            document.getElementById('sun').className ='sun-static';
            document.getElementById('input').className ='input-static';
            document.getElementById('email').className ='email-static';
            document.getElementById('message').className ='message-static';         
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
                    <div className="leave">
                        <h1>
                            Leave Me A Message
                        </h1>
                    </div>
                    <textarea id="input" type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleName} required=""/>
                    <textarea id="email" type="text" placeholder="Your E-mail" value={this.state.email} onChange={this.handleEmail} required=""/>
                    <textarea id="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handlemessage} required=""/>

                    <div className="bottom">
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
                <p className="copyright">   
                    Copyright ©2019 - Parsa Sam
                </p>
            </div>
        )
    }
}