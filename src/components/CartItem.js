import React, { Component } from 'react';
class App extends Component {
  render() {
    var { cart } = this.props;
    return (
      <tr className="rowing">
        <td ><img src={cart.product.image} />
        </td>
        <td >{cart.product.name}</td>
        <td >{cart.product.salePrice}$</td>
        <td ><span>{cart.quantity}</span><button className="morong" onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity +1 )}>+</button>
        <button onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity -1 )} className="morong">-</button>  </td>
        <td > {this.sumItem(cart.product.salePrice, cart.quantity)}$ </td>
        <button id="xoa" onClick={() => this.onDelete(cart.product)}>X</button>
      </tr>
    );
  }
  onDelete = (product) => {
    var { onDeletee } = this.props;

     var x = window.confirm("Xóa khỏi giỏ hàng?");
      if (x){onDeletee(product)}
          
      else{return false;}
        

    
  }

  onUpdateQuantity=(product,quantity)=>{
    this.props.onUpdate(product,quantity)
  }

  sumItem = (price, quantity) => {
    return price * quantity;
  }
}

export default App;
