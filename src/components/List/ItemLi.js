import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class ItemLi extends Component {

    static propTypes = {
        className_li: propTypes.string.isRequired,
        className_svg: propTypes.string.isRequired,
        ahRef: propTypes.string,
        id_svg: propTypes.string,
        aria_label: propTypes.string,
        width: propTypes.string.isRequired,
        height: propTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <li className={this.props.className_li}><a href={this.props.ahRef} aria-label={this.props.aria_label}>
                <svg className={this.props.className_svg} width={this.props.width} height={this.props.height}>
                    <use href={this.props.id_svg}></use>
                </svg>
            </a>
            </li>
        );
    }
}
