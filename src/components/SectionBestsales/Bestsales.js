import React, {Component} from 'react';
import BestsalesCard from "./BestsalesCard/BestsalesCard";
import './best-sales.css';

class Bestsales extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <section className="best-sales">
                <h2 className="best-sales__name"><span>BEST</span> SALES</h2>
                <p className="best-sales__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry</p>
                <div className="best-sales__wrapper">
                    <BestsalesCard/>
                    <BestsalesCard/>
                    <BestsalesCard/>
                </div>
            </section>
        );
    }
}

Bestsales.propTypes = {};

export default Bestsales;
