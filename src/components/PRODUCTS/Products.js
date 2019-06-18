import React, {Component} from 'react';
import Header from '../Header/Header.js';
import CatalogIndex from '../CatalogIndex/CatalogIndex.js'
import Footer from '../Footer/Footer.js';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Header/>
                <CatalogIndex/>
                <Footer/>
            </div>
        );
    }
}

Products.propTypes = {};

export default Products;
