import React, {Component} from 'react';
import '../FormOrder/form-order.css';

class FormContacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <fieldset className="form-order__contacts">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"/>

                <label htmlFor="mail">Your E-mail</label>
                <input type="email" id="mail"/>

                <label htmlFor="tel">Your Telephone</label>
                <input type="text" id="tel"/>

                <label htmlFor="adress">Your Adress</label>
                <textarea id="adress"></textarea>

                <label htmlFor="info">Additional Information</label>
                <textarea id="info"></textarea>
            </fieldset>
        );
    }
}

FormContacts.propTypes = {};

export default FormContacts;
