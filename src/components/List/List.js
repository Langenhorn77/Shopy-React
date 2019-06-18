import React, {Component} from 'react';
import propTypes from 'prop-types';
import ItemLi from './ItemLi';

export default class List extends Component {
    static propTypes = {
        className: propTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <ul className={this.props.className}>
                <ItemLi className_li={'social__item'} ahRef={'http://facebook.com'} className_svg={'social__item-icon'}
                         id_svg={'#icon-facebook'} aria_label={'Facebook'} width={'5.78'} height={'11'}/>
                <ItemLi className_li={'social__item'} ahRef={'http://twitter.com'} className_svg={'social__item-icon'}
                        id_svg={'#icon-twitter'} aria_label={'Twitter'} width={'13.03'} height={'11'}/>
                <ItemLi className_li={'social__item'} ahRef={'http://google.com'} className_svg={'social__item-icon'}
                         id_svg={'#icon-google+'} aria_label={'Google'} width={'12.31'} height={'11'}/>
                <ItemLi className_li={'social__item'} ahRef={'http://instagram.com'} className_svg={'social__item-icon'}
                         id_svg={'#icon-instagram'} aria_label={'Instagram'} width={'10.84'} height={'11'}/>
            </ul>
        );
    }
}

