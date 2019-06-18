import React, {Component} from 'react';

import Header from '../Header/Header.js';
import ProductInfo from '../ProductInfo/ProductInfo.js';
import Footer from '../Footer/Footer.js';

export default class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Header/>
                <ProductInfo/>
                <Footer/>
            </div>
        );
    }
}

ProductPage.propTypes = {};
