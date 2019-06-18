import React, {Component} from 'react';
import logoshopy from '../../img/logo-shopy.png';
import './Footer.css';
import PaymentList from "../PaymentList/PaymentList";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <footer className="page-footer">
                <div className="page-footer__copyright">
                    <a href="/"><img src={logoshopy} height="38" width="118" alt="Shopy logo"/></a>
                    <p>shopy c 2015 . your copyright here</p>
                </div>
                <ul className="page-footer__menu-list">
                    <li className="page-footer__menu-item page-footer__menu-item--active"><a href="#">about us</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>our feed</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>join us</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>contact us</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>terms and conditions</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>live support</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>support</a></li>
                    <li className="page-footer__menu-item"><a href={"#"}>our privacy</a></li>
                </ul>
                <div className="page-footer__payment">
                    <h3>Payment Methods</h3>
                    <PaymentList/>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
