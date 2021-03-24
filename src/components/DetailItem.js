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
            <button id="pay2" onClick={()=>this.onAddToCart()}><Link to="/cart"> Add to cart</Link></button>
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
                    <div id="chitiet1">
                        {product.content}
                    </div>
                )
            }
        }) : <div className="chitiet1">
            <h2>Please Let us knows what things made you disapointed ?</h2>
            <textarea placeholder="Tell me how"></textarea>
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
                                    <h2>{product.name}</h2>
                                    <p className="oldPrice"> {product.oldPrice} $</p>
                                    <p className="salePrice">{product.salePrice} $</p>
                                </div>
                                <div id="moreInfo">
                                    <p>{product.moreInfo}</p>
                                </div>
                                <ul id="rating">
                                    {this.showRating(product.rating)}
                                </ul>
                                {elmBuy}
                                <div className="chitiet1">
                                    <div className="rated">
                                        <ul>
                                            {elmButton}
                                        </ul>
                                    </div>
                                    {elmDetail}
                                </div>
                            </div>
                            <h1> Related Item </h1>
                            <div id="related">
                                {
                                    products.map((product, index) => {
                                        if (product.id != this.props.match.params.id) {
                                            if (dem <= 5) {
                                                dem++;
                                                return (
                                                    <ItemRelated name={product.name} anh={product.image} product={product} tinId={product.id} />
                                                )
                                            }
                                        }
                                    })
                                }
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