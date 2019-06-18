import React, {Component} from 'react';
import {Menu} from "./menu.js";
import MenuItem from './MenuItem.js';
import './main-menu.css';

export default class MenuList extends Component {

    render() {
        const MenuArray = Menu.map( (item) => (
            <MenuItem
                key = {item.id}
                typeMenu={0}
                class_Name={item.class_Name}
                href={item.href}
                text={item.text}
            />
        ));
        return (
            <ul className="main-menu__nav-list">
                {MenuArray}
            </ul>
        );
    }
}

