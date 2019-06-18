import React, {Component} from 'react';
import product_4_small from "../../../img/product-4-small.jpg";
import rate from "../../../img/rate.jpg";
import './bestsales-card.css';

class BestsalesCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="best-sales__card">
                <img src={product_4_small} height="90" width="89" alt="product"/>
                <div className="best-sales__card-wrapper">
                    <p className="best-sales__card-name">Reebok Track Jacket</p>
                    <p className="best-sales__card-info">
                        <img src={rate} height="23" width="90" alt="rate"/>
                        <span>100$</span>
                    </p>
                </div>
            </div>
        );
    }
}

BestsalesCard.propTypes = {};

export default BestsalesCard;
