import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { actAddToCart } from './../actions/index';
class Products extends Component {
  render() {
    var { products, match } = this.props;
    return (
      <div id="grid wide" class="widest">
        <div id="content"> DÀNH RIÊNG CHO BẠN </div>
        <h2> Điện thoại Android nổi bật </h2>
        <div id="center" className="row">
          {this.showProducts(products)}
        </div>
        <h2> Điện thoại Iphone nổi bật </h2>
        <div id="center" className="row">
          {this.showIphone(products)}
        </div>
        <h2> Phụ kiện nổi bật </h2>
        <div id="center" className="row">
          {this.showPhuKien(products)}
        </div>
      </div>
    );
  }
  showProducts(products) {
    var { onAddToCart } = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if( product.id <= 6){
        return <Product key={index} product={product} anh={product.anh} name={product.name} tinId={product.id} onAddToCart={onAddToCart} />
        }
      });
    }
    return result;
  }
  showIphone(products) {
    var { onAddToCart } = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if( product.id > 6 && product.id <= 12){
        return <Product key={index} product={product} anh={product.anh} name={product.name} tinId={product.id} onAddToCart={onAddToCart} />
        }
      });
    }
    return result;
  }
  showPhuKien(products) {
    var { onAddToCart } = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        if( product.id > 12){
        return <Product key={index} product={product} anh={product.anh} name={product.name} tinId={product.id} onAddToCart={onAddToCart} />
        }
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product,quantity) => {
      dispatch(actAddToCart(product, 1))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);

