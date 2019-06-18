import propTypes from "prop-types";
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class MenuItem extends Component {
    static  propTypes = {
        typeMenu: propTypes.number.isRequired,
        class_Name: propTypes.string.isRequired,
        href: propTypes.string,
        text: propTypes.string,
        img: propTypes.string,
        alt: propTypes.string

    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <li className={this.props.class_Name}>
                {this.props.typeMenu === 0 ?
                    <Link to={this.props.href}> {this.props.text} </Link> :
                    <Link to={this.props.href}><img src={this.props.img} alt={this.props.alt}/></Link>
                }
            </li>
        );
    }
}
