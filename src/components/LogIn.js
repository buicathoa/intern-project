import React, { Component } from 'react';
import SignUp from './signUp';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isDisplay: true
        }
    }
    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
    onCreate=()=>{
        this.setState({
            isDisplay : !this.state.isDisplay
        })
    }
    render() {
        var {isDisplay}= this.state;
        var elmRegister = isDisplay ? <div className="dangnhap">
        <form onSubmit={this.onSubmit} className="login">
      
                <p> UserName </p>
                <input type="text" name="username" placeholder="username" className="nhap" />
                <br />
                <p> Password </p>
                <input type="password" name="password" className="nhap" placeholder="password" />
  
            <button className="action"><a href="/"> Next </a></button>
            <button className="create" onClick={this.onCreate}> Create an account </button>
        </form>                  
    </div> : <SignUp/>
        return (
            <div className="ve">
                <div className="introduce">
                <h2> Welcome to the world of Inspiring</h2>
                </div>
                {elmRegister}
            </div>
        )
    }
}
export default LogIn