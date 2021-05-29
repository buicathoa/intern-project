import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class Menutop extends Component {
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userFullName');
  }
  render() {
    return (
      <div id="menu-top">
        <div id="topmenu">
        
          {localStorage.getItem("userFullName") == null ?
            <label id="Log-in"><p><NavLink activeStyle={{ backgroundColor: '#67de3c', color: 'red', textDecoration: 'none', fontWeight: 'bold' }} to="/login">Đăng nhập</NavLink></p></label>
            :
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" id="Log-in">{localStorage.getItem("userFullName")}</button>
              <ul class="dropdown-menu">
                <li><a href="/config">Cấu hình tài khoản</a></li>
                <li onClick={this.onLogOut}><a href="/">Thoát</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    );

  }
  
}

export default Menutop;
