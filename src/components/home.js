import React, { Component } from 'react';
import Convenients from './Convenients';
import Flashsale from './Flashsale';
import Footer from './Footer';
import Products from './Products';
import Sliderss from './Sliderss';
class Home extends Component {
    render() {
        return (
            <div>
                <Sliderss/>
                <Convenients/>
                <Products/>
                <Flashsale/>
                <Footer/>
            </div>
            )
    }
}
export default Home