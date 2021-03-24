import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
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
          <p className="item-name"> {product.name} </p>
          <br />
          <p className="sale-price">{product.salePrice}$</p>
          <p className="old-price">{product.oldPrice}$</p>
          <p className="description">{product.description}</p>
          <br />
          <ul className="rating">
            {this.showRating(product.rating)}
          </ul>
          <div id="addToCart">
            <div className="pay" onClick={()=>this.addToCart(product)}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" class="svg-inline--fa fa-cart-plus fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  addToCart=(product)=>{
    this.props.onAddToCart(product);
    alert('Them vao gio hang thanh cong !')
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
