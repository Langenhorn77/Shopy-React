import React, {Component} from 'react';
import propTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import MenuUserList from '../MenuUserList/MenuUserList.js'

class ProductInfo extends Component {
    static propTypes = {
        width: propTypes.string,
        height: propTypes.string,
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        alt: propTypes.string,
        src: propTypes.string.isRequired,
        categorie: propTypes.string,
        size: propTypes.string,
        brand: propTypes.string,
        text: propTypes.string.isRequired
    };

    static defaultProps = {
        alt: 'product photo',
        width: '191',
        height: '260'
    };

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="product-info">
                <div className="product-info__img">
                    <img
                    src={this.props.src}
                    alt={this.props.alt}
                    height={this.props.height}
                    width={this.props.width}/>
                </div>
                <div className="product-info__text">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.text}</p>
                    <div className="product-info__wrapper">
                        <p className="product-info__size">Size <span>{this.props.size}</span></p>
                        <div className="product-info__quantity">
                            <p>Choose quantiti</p>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </div>
                    <div className="product-info__wrapper">
                        <p className="product-info__price"></p>
                        <div className="product-info__menu">
                            <MenuUserList/>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductInfo.propTypes = {};

export default  withRouter(ProductInfo);
