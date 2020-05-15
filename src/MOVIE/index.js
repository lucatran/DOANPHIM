import React, { Component } from 'react'
import Carousel from './Carousel';
import Header from './Header';
import Product from './Product/List';
import Promotion from './Promotion';
import Footer from './Footer';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Product />
                <Promotion />
                <Footer />
            </div>
        )
    }
}
export default Home;


