import propTypes from "prop-types";
import React, {Component} from 'react';


export default class PaymentCard extends Component {
    static  propTypes = {
        ahRef: propTypes.string.isRequired,
        src: propTypes.string.isRequired,
        width: propTypes.string.isRequired,
        height: propTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <li className="page-footer__payment-item">
                <a href={this.props.ahRef}><img src={this.props.src} height={this.props.height} width={this.props.width} alt="payment card"/></a>
            </li>
        );
    }
}
