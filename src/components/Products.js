import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { actAddToCart } from './../actions/index';
class Products extends Component {
  render() {
    var { products, match } = this.props;
    return (
      <div id="grid wide">
        <div id="content"> DÀNH RIÊNG CHO BẠN </div>
        <div id="center" className="row">
          {this.showProducts(products)}
        </div>
      </div>
    );
  }
  showProducts(products) {
    var { onAddToCart } = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product} anh={product.anh} name={product.name} tinId={product.id} onAddToCart={onAddToCart} />
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
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

