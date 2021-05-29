import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password:'',
        }
      }
    // handleLogin() {
    //     axios({
    //         method: 'post',
    //         url: 'https://cusapi.rnt.vn/api/Account/SignIn',
    //         data: {
    //          UserName: this.state.username,
    //          PassWord: this.state.password
    //         }
    //       }).then(res=>{
    //             window.location.href("/");
    //       }).catch(res=>{
    //             console.log(res.message);
    //       })
    // }
    handleEmailChange=(e)=> {
        this.setState({username: e.target.value});
     }
     handlePasswordChange=(e)=> {
        this.setState({password: e.target.value});
     }
     onHandleSubmit=(event)=>{
        axios({
                    method: 'post',
                    url: 'https://cusapi.rnt.vn/api/Account/SignIn',
                    data: {
                     UserName: this.state.username,
                     PassWord: this.state.password
                    }
                  }).then(res=>{
                        if(res.data.isSuccess !== 0){
                            console.log(res.data.data.userId)
                            localStorage.setItem('userId', res.data.data.userId);
                            localStorage.setItem('token', res.data.data.token)
                            localStorage.setItem('userFullName', res.data.data.userFullName   )
                            
                             window.location.href = "/";
                             console.log(res);                      
                        }else{
                            alert(res.data.message);
                            this.setState({
                                username:'',
                                password:''
                            })
                        }
                  })
        event.preventDefault();
     }
    render() {
        return (
            <div className="global-container">
                <div className="card login-form">
                    <div className="card-body" id="form-login">
                        <h3 className="card-title text-center">Sign in to use our services!</h3>
                        <div className="card-text">
                            <form onSubmit={this.onHandleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="text" value={this.state.username}  
                                    onChange={this.handleEmailChange} name="username" 
                                    className="form-control form-control-sm" id="exampleInputEmail1"
                                     aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <a href="#" style={{ float: 'right', fontSize: '12px' }}>Forgot password?</a>
                                    <input type="password" name="password" value={this.state.password} 
                                    onChange={this.handlePasswordChange}className="form-control form-control-sm"
                                    id="exampleInputPassword1" />
                                </div>
                                <input type="submit" value="Đăng nhập" className="btn btn-primary btn-block"></input>
                                <div className="sign-up">
                                    Don't have an account? <a href="#">Create One</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LogIn