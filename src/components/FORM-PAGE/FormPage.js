import React, {Component} from 'react';
import Header from '../Header/Header.js';
import FormOrder from '../FormOrder/FormOrder.js';
import Footer from '../Footer/Footer.js';

class FormPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <Header/>
                <FormOrder/>
                <Footer/>
            </div>
        );
    }
}

FormPage.propTypes = {};

export default FormPage;
