import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { actDelete, actUpdate } from '../actions';
class Cart extends Component {
  cartQuantity = (Carts) => {
  if(Carts.length>0){
    for(var i = 0 ; i < Carts.length; i++){
      i = 0 + i
    }
    return <p> Bạn có <span id="none"> {i} </span> sản phẩm trong giỏ hàng </p>;
  }else{
    return(
    <p> Bạn <span id="none">chưa </span>có sản phẩm nào trong giỏ hàng !</p>
    )
  }}
  render() {
    var { Carts } = this.props;
    return (
      <div id="cart">
        <h2> Your cart </h2>
        {this.cartQuantity(Carts)} 
        <br/>
        <table>
          <tr>
            <th scope="row">Image</th>
            <th> Product </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Sum up </th>
          </tr>
          <br />
          {this.showCart(Carts)}
        </table>
        <h2>Total Amount : {this.showSubTotal(Carts)}$</h2>
      </div >
    );
  }
  showCart = (Carts) => {
    var { onUpdate } = this.props;
    var { onDeletee } = this.props;
    var result = null;
    if (Carts.length > 0) {
      result = Carts.map((cart, index) => {
        return <CartItem cart={cart} onDeletee={onDeletee} onUpdate={onUpdate} />
      })
    }
    return result;
  }
  showSubTotal = (Carts) => {
    var total = 0;
    for (var i = 0; i < Carts.length; i++) {
      total += Carts[i].product.salePrice * Carts[i].quantity;
    }
    return total;
  }
}
const mapStateToProps = state => {
  const { Carts } = state;
  return { Carts }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeletee: (product) => {
      dispatch(actDelete(product))
    },
    onUpdate: (product, quantity) => {
      dispatch(actUpdate(product, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
