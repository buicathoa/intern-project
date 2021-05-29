import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Cart from './Cart';
import { Button,Modal} from 'react-bootstrap'
import 'reactjs-popup/dist/index.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.addToCart = this.addToCart.bind(this);
  }
   addToCart(product){
   if (localStorage.getItem("token") === null) {
       window.location.href =  "/login";
    }else{
      this.props.onAddToCart(product);
      alert('Them vao gio hang thanh cong !')
    }
  }
  onDetail(){
    window.location.href=""
  }
  handleModal() {
    this.setState({ show: !this.state.show })
  }
  chuyendoiURL = (str) => {
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }

  render() {
    var { product } = this.props;
    return (
      <div className="col l-2 m-6 c-12">
        <div className="item">
          <Link to={"/san-pham/" + this.chuyendoiURL(this.props.name) + "." + this.props.tinId + ".html"}>
            <img src={product.image} alt="for react router" />
          </Link>
          <div className="overlay1"></div>
          <p className="item-name"> {product.name} </p>
          <br />
          <p className="sale-price">{product.salePrice}$</p>
          <p className="old-price">{product.oldPrice}$</p>
          <p className="description">{product.description}</p>
          <br />
          <ul className="rating">
            {this.showRating(product.rating)}
          </ul>
          <div id="addToCart" style={{zIndex:0}}>
            <div className="pay" onClick={() => this.addToCart(product)}>
              Thêm vào giỏ hàng
            </div>
            <div className="detail"style={{height:'30px',textAlign:'center',backgroundColor:'orange',color:'black',display:'flex', flexDirection:'column',justifyContent:'center',width:'95%',marginLeft:0}}>
            <Link style={{color:'black',textDecoration:'none', zIndex:0}}to={"/san-pham/" + this.chuyendoiURL(this.props.name) + "." + this.props.tinId + ".html"}> 
              Chi tiết sản phẩm
            </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  showRating(rating) {
    var result = [];
    for (var i = 0; i < rating; i++) {
      result.push(<i className="fa fa-star"></i>)
    }
    for (var j = 0; j < 5 - rating; j++) {
      result.push(<i className="fa fa-star-o"></i>)
    }
    return result;
  }
}

export default Product;
