import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actNextSlide, actBackSlide } from './../actions/index'
class Flashsale extends Component {
  constructor(props) {
    super(props)
    this.state = {
      second: 500
    }
  }

  componentDidMount() {

    let storageSecond = localStorage.getItem('countdown');
    if (storageSecond && storageSecond !== "undefined") {
      storageSecond = parseInt(storageSecond);
      this.setState({ second: storageSecond }, () => this.onIntervalCountdown());
    }
    else {
      this.onIntervalCountdown()
    }

    window.addEventListener('beforeunload', this.handleWindowClose)
  }

  componentWillUnmount() {
    if (this.myInterval) {
      clearInterval(this.myInterval)
      this.myInterval = null;
      window.removeEventListener('beforeunload', this.handleWindowClose);
    }
  }


  handleWindowClose = () => {
    const { second } = this.state;
    localStorage.setItem('countdown', second)
  }

  onIntervalCountdown = () => {
    this.myInterval = setInterval(() => {
      this.onCountDown();
    }, 1000);
  }

  onCountDown = () => {
    let { second } = this.state;
    requestAnimationFrame(() => {
      if (second >= 1) {
        second -= 1;
        this.setState({ second })
      }
    })
  }

  secondToTime = (inp) => {
    let hour = 0, minute = 0, second = 0;
    if (inp <= 59) {
      second = inp;
    }
    else {
      minute = parseInt(inp / 60);
      second = Math.abs((minute * 60) - inp);
      if (minute >= 60) {
        hour = minute / 60;
        minute = hour * 60 - minute;
      }
    }
    return { hour, minute, second }
  }

  render() {

    let { slideDeals, startSlide,endSlide } = this.props;
    const { hour, minute, second } = this.secondToTime(this.state.second);
    return (
      <div id="deals">
        <div id="flash-sale"> Flash Sale
      <div id="currentTime">
            <div className="hour" >{hour}</div>
            <div className="min" >{minute}</div>
            <div className="seconds" >{second}</div>
          </div>
        </div>
        <div id="sale-off" className="centre">
          <div id="trolai" onClick={() => this.onHandleBack()}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="backward" className="svg-inline--fa fa-backward fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"  id="backing" /></svg>
          </div>
          {this.showFlashsale(slideDeals, startSlide, endSlide)}
          <div id="tieptheo" onClick={() => this.onHandleNext()}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="forward" className="svg-inline--fa fa-forward fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-6 c-1256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"  /></svg>
          </div>
        </div>
      </div>

    );
  }


  showFlashsale = (slideDeals, startSlide, endSlide) => slideDeals.map((slide, index) => (
    <div key={index} className="deal-soc" style={{ display:  slide.id >= startSlide && slide.id <= endSlide ? 'block' : 'none' }}>
      <img src={slide.image} />
      <p className="old-price"> {slide.oldPrice}$ </p>
      <p className="sale-price"> {slide.salePrice}$ </p>
    </div>
  ))
  onHandleNext() {
    this.props.actNextSlide()
  }
  onHandleBack() {
    this.props.actBackSlide()
  }
}
const mapStateToProps = state => {
  const { Dealsoc } = state
  const { startSlide, endSlide } = Dealsoc
  const { slideDeals } = Dealsoc
  return { startSlide, slideDeals, endSlide }
}
export default connect(mapStateToProps,
  {
    actNextSlide, actBackSlide
  }
)(Flashsale);
