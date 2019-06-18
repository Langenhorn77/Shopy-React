import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './product-card.css';
import propTypes from "prop-types";

class ProductCard extends Component {
    static propTypes = {
        width: propTypes.string.isRequired,
        height: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        alt: propTypes.string,
        src: propTypes.string.isRequired,
        categorie: propTypes.string,
        size: propTypes.string,
        brand: propTypes.string
    };

    static defaultProps = {
        alt: 'product photo',
    };

    constructor(props) {
        super(props);
        this.state = {
            mvisible: 1};

    }

/*  on_click(event) {
      this.setState({mvisible: 0})
  }*/

   on_click = () => {
       this.props.history.push('/productpage');
   };

    render() {
        return (
            <div className="product-card">
                <img className="product-card__image"
                     src={this.props.src}
                     alt={this.props.alt}
                     height={this.props.height}
                     width={this.props.width}
                     onClick={this.on_click}/>
                <p className="product-card__desc">{this.props.name}</p>
                <p className="product-card__price">{this.props.price.toString()+'$'}</p>
            </div>
        );}
    }

ProductCard.propTypes = {};

export default  withRouter(ProductCard);
