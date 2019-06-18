import React, {Component} from 'react';
import Header from '../Header/Header.js';
import Promo from '../SectionPromo/Promo.js';
import MainIndex from '../MainIndex/MainIndex.js';
import Footer from '../Footer/Footer.js';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Header/>
                <Promo/>
                <MainIndex/>
                <Footer/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
