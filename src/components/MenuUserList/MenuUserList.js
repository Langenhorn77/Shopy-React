import React, {Component} from 'react';
import {MenuUser} from "../MenuList/menu.js";
import MenuItem from '../MenuList/MenuItem.js';
import '../MenuList/main-menu.css';

export default class MenuUserList extends Component {

    render() {

        const MenuArray = MenuUser.map( (item) => (
            <MenuItem
                key = {item.id}
                typeMenu={1}
                class_Name={item.class_Name}
                href={item.href}
                img={item.img}
            />
        ));
        return (
            <ul className="main-menu__user-list">
                {MenuArray}
            </ul>
        );
    }
}
