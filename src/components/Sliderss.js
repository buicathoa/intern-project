import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChangeImages, actBackImages, actSelector } from '../actions/index';
class Sliderss extends Component {
  render() {
    var { slideImage, displayId } = this.props;
    return (
      <div id="slider">
        {
          slideImage && this.renderSlider(slideImage, displayId)
        }
        <div id="toLeft">
          <svg aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10"
            role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              onClick={() => this.onBack()} /></svg>
        </div>
        <div id="toRight">
          <svg aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path fill="#000" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              onClick={() => this.onNext()} /></svg>
        </div>
        <div id="selector" className="checkbox">
          {this.renderButton(slideImage, displayId)}
        </div>
      </div>
    );
  }

  renderSlider = (items, displayId) => items.map((item, index) => (
    <div className="Slider" style={{ display: item.index === displayId ? 'block' : 'none' }}>
      <img src={item.slider.image} />
    </div>
  ))
  renderButton = (buttons, displayId) => buttons.map((button, index) => (
    <div className="renderButton">
      <button style={{ backgroundColor: button.index === displayId ? 'white' : 'rgba(0,0,0,0.5)' }}
        onClick={() => this.onSelector(button.index)}></button>
    </div>
  ))
  onNext() {
    this.props.actChangeImages()
  }
  componentDidMount(){
     setInterval(()=>{
       this.onNext();
     },5000) ;
  }
  onBack() {
    this.props.actBackImages()
  }
  onSelector(id) {
    this.props.actSelector(id)
  }
}

const mapStateToProps = (state) => {
  const { sliders } = state
  const { slideImage, displayId } = sliders
  return { slideImage, displayId }
}

export default connect(mapStateToProps,
  {
    actChangeImages, actBackImages, actSelector
  }
)(Sliderss);
