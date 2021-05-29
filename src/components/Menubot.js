import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { actSearch } from '../actions';

class Menubot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onShowCart(){
    if (localStorage.getItem("token") === null) {
      window.location.href =  "/login";
   }else{
     window.location.replace("/cart");
   }
  }
  onFind = (keyword) => {
    this.props.actSearch(keyword);
  }
  render() {
    var { keyword } = this.state;
    var {Carts} = this.props;
    return (
      <div id="menu-bot">
        <div id="botmenu">
          <div id="logo">
            <h2><Link to="/"> Mr.Hòa </Link></h2>
          </div>
          <div id="loop">
            <input type="text" value={keyword} onChange={this.onChange} name="keyword" type="text" className="search" placeholder="Tìm kiếm" />
            <button type="button" id="searching" onClick={()=>this.onFind(keyword)} className="btn btn-secondary">Tìm</button>
          </div>
          <div id="shoppingcart" onClick={this.onShowCart}>

              
              <svg aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                className="svg-inline--fa fa-shopping-cart fa-w-18"
                role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"><path fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>

            <span><h1 id="soluong">{Carts.length}</h1></span>
          </div>
        </div>
      </div>
    );

  }
}
const mapStateToProps = (state) => {
  const {products} = state;
  const { Carts } = state;
  return {products,Carts}
}
export default connect(mapStateToProps,{actSearch}) (Menubot);
