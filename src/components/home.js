import React, { Component } from 'react';
import Convenients from './Convenients';
import Flashsale from './Flashsale';
import Footer from './Footer';
import Products from './Products';
import Sliderss from './Sliderss';
import Tuychons from './Tuychons';
class Home extends Component {
    render() {
        return (
            <div>
                <Sliderss/>
                <Convenients/>
                <Products/>
                <Flashsale/>
                <Tuychons/>
                <Footer/>
            </div>
            )
    }
}
export default Home