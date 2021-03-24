import React, { Component } from 'react';
class Button extends Component {
  render() {
    return (
      <div id="button">
        <button className="buy"> Mua ngay</button>
        <button className="add"> Thêm vào giỏ </button>
      </div>
    );
  }
}

export default Button;
