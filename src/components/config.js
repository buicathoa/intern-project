import React, { Component } from 'react';
class config extends Component {
  render() {
    return (
      <div style={{height:900,display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1 style={{textAlign:'center',marginTop:'151px'}}>Hello <span style={{color:'orange'}}>{localStorage.getItem("userFullName")}</span> </h1>
          <h1 style={{textAlign:'center'}}>Your ID is: <span style={{color:'orange'}}>{localStorage.getItem("userId")}</span></h1>
      </div>
    );
  }
}

export default config;