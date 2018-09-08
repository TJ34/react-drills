import React, { Component } from 'react';


export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            userName: '',
            password: ''
        }

        this.alertMessage = this.alertMessage.bind(this);
    }

    nameChange = (val) => {
        this.setState({userName: val});
    }

    passwordChange = (val) => {
        this.setState({password: val});
    }

    alertMessage = () => {
        alert('Username: ' + this.state.userName + ' Password: ' + this.state.password);
        this.setState({userName: '',password: ''})
    }
    
    render(){
        return(
            <div>
                <input onChange={(e) => this.nameChange(e.target.value)} type="text" placeholder="Username"/>
                <input onChange={(e => this.passwordChange(e.target.value))} type="text" placeholder="Password"/>
                <button onClick={this.alertMessage}>Login</button>
            </div>
        )
    }

}