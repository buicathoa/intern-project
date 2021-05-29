import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDetail } from './../actions/index'
import ItemRelated from './ItemRelated';
class DetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        }
    }
    onAddToCart(){
        alert('Them gio hang thanh cong')
    }
    onDetail = () => {
        this.setState({
            isDisplay: true
        })
    }
    onMind = () => {
        this.setState({
            isDisplay: false
        })
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
    render() {
        var dem = 0;
        var { match, products, feedbacks, displayId } = this.props;
        var { isDisplay } = this.state
        var elmBuy = isDisplay ? 
        <div id="pay0">
            <button id="pay2" onClick={()=>this.onAddToCart()}><Link to="/cart" style={{color:'white'}}> Add to cart</Link></button>
        </div> : ''
        var elmButton = isDisplay ?
            <ul>
                <li className="Detail" onClick={() => this.onDetail()} style={{ color: 'red' }}> Item detail</li>
                <li className="mindd" onClick={() => this.onMind()}> What's on your mind ?</li>
            </ul> :
            <ul>
                <li className="Detail" onClick={() => this.onDetail()}> Item detail</li>
                <li className="mindd" onClick={() => this.onMind()} style={{ color: 'red' }}> What's on your mind ?</li>
            </ul>
        var elmDetail = isDisplay ? products.map((product, index) => {
            if (product.id == this.props.match.params.id) {
                return (
                    <div id="chitiet1" style={{height:'229px'}}>
                        {product.content}
                    </div>
                )
            }
        }) : <div style={{height:'229px'}} className="chitiet1">
            <textarea style={{height:'229px', width:'100%',marginLeft:0}}placeholder="Tell me how"></textarea>
            <button id="send"> Send </button>
        </div>

        return (
            products.map((product, index) => {
                if (product.id == this.props.match.params.id) {
                    return (
                        <div className="ve" id="detaill">

                            <div id="detail">
                                <img src={product.image} />
                            </div>
                            <div id="icon">
                                <div id="chitiet">
                                    <h2 style={{marginTop:50}}>{product.name}</h2>
                                    <p  style={{marginTop:50}} className="oldPrice"> {product.oldPrice} $</p>
                                    <p  style={{marginTop:50}}className="salePrice">{product.salePrice} $</p>
                                </div>
                                <div  style={{marginTop:50}} id="moreInfo">
                                    <p style={{textAlign:'center'}}>{product.moreInfo}</p>
                                </div>
                                <ul  style={{marginTop:55}} id="rating">
                                    {this.showRating(product.rating)}
                                </ul>
                                {elmBuy}
                                <div  style={{marginTop:50}} className="chitiet1">
                                    <div style={{marginLeft:'-37px'}}className="rated">
                                        <ul>
                                            {elmButton}
                                        </ul>
                                    </div>
                                    {elmDetail}
                                </div>
                            </div>
                            </div>
                    )
                }
            })
        )
    }
   
}
const mapStateToProps = state => {
    const { products } = state

    return { products }
}
export default connect(mapStateToProps, null)(DetailItem);