import React, {Component} from 'react';
import PaymentCard from "./PaymentCard";
import payMethods from './payMethods';


export default class PaymentList extends Component {
    render() {
        const PaymentArray = payMethods.map((card) => (
            <PaymentCard
                key={card.id}
                src={card.src}
                ahRef={card.href}
                width={card.width}
                height={card.height}
            />
        ));

        return (
            <ul className="page-footer__payment-list">
                {PaymentArray}
            </ul>
        );
    }
}
