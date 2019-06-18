import React, {Component} from 'react';
import {Link} from "react-router-dom";

import MenuList from '../MenuList/MenuList.js';
import MenuUserList from '../MenuUserList/MenuUserList.js';
import List from '../List/List.js';
import logoshopy from '../../img/logo-shopy.png';
import search from '../../img/icon-search.svg';
import user from '../../img/icon-user.svg';
import cart from '../../img/icon-cart.svg';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <header className="page-header">
                <div className="page-header__info">
                    <ul className="page-header__info-contact contact">
                        <li className="contact__item contact__item--mail"><a href="http://google.ru">info@shopy.com</a>
                        </li>
                        <li className="contact__item contact__item--phone"><a href="http://google.ru">453 - 5553 -
                            996</a></li>
                    </ul>
                    <List className={'page-header__info-social social'}/>
                </div>
                <div className="page-header__menu main-menu">
                    <Link to={'/'}><img src={logoshopy} height="38" width="118" alt="Shopy logo"/></Link>
                    <MenuList/>
                    <MenuUserList/>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
