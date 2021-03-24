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
  onFind = (keyword) => {
    this.props.actSearch(keyword)
  }
  render() {
    var { keyword } = this.state
    return (
      <div id="menu-bot">
        <div id="botmenu">
          <div id="logo">
            <h2><Link to="/"> Mr.Hòa </Link></h2>
          </div>
          <label htmlFor="bar" id="navbar">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
          </label>
          <input type="checkbox" hidden name id="bar" />
          <label className="overlay" htmlFor="bar" />
          <label className="list-item" id="l" htmlFor="bar">
            <div className="logo">
              <h2>Mr.Hòa</h2>
              <h2> Tất cả danh mục </h2>
            </div>
            <hr />
            <ul className="list">
              <li><a href="#">Thời trang nữ</a>
                <ul className="sub-menu">
                  <li className="topic"><a href="#">Đầm, váy</a></li>
                  <li><a href="#">Đầm suông</a></li>
                  <li><a href="#">Đầm xòe</a></li>
                  <li><a href="#">Đầm maxi</a></li>
                  <li><a href="#">Đầm ôm</a></li>
                  <li className="topic"><a href="#">Áo nữ</a></li>
                  <li><a href="#">áo thun</a></li>
                  <li><a href="#">Áo sơmi</a></li>
                  <li><a href="#">Áo polo</a></li>
                  <li><a href="#">Áo trễ vai</a></li>
                </ul>
              </li>
              <li><a href="#">Thời trang nam</a>
                <ul className="sub-menu">
                  <li className="topic"><a href="#">Áo sơ mi nam</a></li>
                  <li><a href="#">Áo sơ mi nam trơn</a></li>
                  <li><a href="#">Áo sơ mi nam caro</a></li>
                  <li><a href="#">Áo sơ mi nam họa tiết </a></li>
                  <li><a href="#">Áo sơ mi nam kẻ sọc</a></li>
                  <li className="topic"><a href="#">Áo khoác nam</a></li>
                  <li><a href="#">Áo khoác dù nam</a></li>
                  <li><a href="#">Áo khoác kaki nam</a></li>
                  <li><a href="#">Áo khoác nam chống nắng</a></li>
                  <li><a href="#">Áo hoodie</a></li>
                </ul>
              </li><li><a href="#">Sức khỏe - Làm đẹp</a></li>
              <li><a href="#" /><a href="#">Giày dép - Túi xách</a></li>
              <li><a href="#">Đồng hồ - Trang sức</a></li>
              <li><a href="#">Điện thoại - Laptop</a></li>
              <li><a href="#">Phụ kiện công nghệ</a></li>
              <li><a href="#">Điện gia dụng - Điện máy</a></li>
              <li><a href="#">Nhà cửa - Tân trang nhà</a></li>
              <li><a href="#">Tivi - Âm thanh - Camera</a></li>
            </ul>
          </label>
          <div id="loop">
            <input type="text" value={keyword} onChange={this.onChange}name="keyword" type="text" className="search" placeholder="Tìm kiếm" />
            <button type="button" onClick={()=>this.onFind(keyword)} id="searching"> Tìm kiếm </button>
          </div>
          <div id="shoppingcart">
            <Link to="/cart">
              <svg aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                className="svg-inline--fa fa-shopping-cart fa-w-18"
                role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"><path fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    );

  }
}
const mapStateToProps = (state) => {
  const {products} = state;
  return {products}
}
export default connect(mapStateToProps,{actSearch}) (Menubot);
