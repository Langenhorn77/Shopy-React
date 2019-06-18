import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './promo.css';

class Promo extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <section className="promo">
                <div className="promo__wrapper">
                    <h2 className="promo__name">FULL WINTER KIT</h2>
                    <p className="promo__desc">Half Jacket + Skiny Trousers + Boot leather</p>
                    <p className="promo__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry</p>
                    <div className="promo__action-wrapper">
                        <p className="promo__price">Price : $120</p>
                        <Link className="promo__order" to={'/order_now'}>Order Now</Link>
                    </div>
                </div>
            </section>
        );
    }
}

Promo.propTypes = {};

export default Promo;
