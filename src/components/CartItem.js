import React, { Component } from 'react';
class App extends Component {
  render() {
    var { cart } = this.props;
    return (
      <tr class="rowing">
        <td ><img src={cart.product.image} />
        </td>
        <td >{cart.product.name}</td>
        <td >{cart.product.salePrice}$</td>
        <td ><span>{cart.quantity}</span><button class="morong" onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity +1 )}>+</button>
        <button onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity -1 )} class="morong">-</button>  </td>
        <td > {this.sumItem(cart.product.salePrice, cart.quantity)}$ </td>
        <button id="xoa" onClick={() => this.onDelete(cart.product)}>X</button>
      </tr>
    );
  }
  onDelete = (product) => {
    var { onDeletee } = this.props;
    alert('Delete item success !')
    onDeletee(product)
  }

  onUpdateQuantity=(product,quantity)=>{
    this.props.onUpdate(product,quantity)
  }

  sumItem = (price, quantity) => {
    return price * quantity;
  }
}

export default App;
