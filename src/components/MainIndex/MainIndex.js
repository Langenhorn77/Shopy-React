import React, {Component} from 'react';
import Arrivals from '../SectionArrivals/Arrivals.js';
import Advertizing from '../SectionAdvertizing/Advertizing.js';
import Bestsales from '../SectionBestsales/Bestsales.js';
import './MainIndex.css';

class MainIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <main className="page-main">
                <h1 className="visually-hidden">Shopy</h1>
                <Arrivals/>
                <Advertizing/>
                <Bestsales/>
            </main>
        );
    }
}

MainIndex.propTypes = {};

export default MainIndex;
