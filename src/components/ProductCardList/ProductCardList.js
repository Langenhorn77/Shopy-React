import React, {Component} from 'react';
import ProductCard from './ProductCard/ProductCard.js';
import product_cardCatalog from './product_cardCatalog.js';
import propTypes from "prop-types";

export default class ProductCardList extends Component {
    static propTypes = {
        maxIndex: propTypes.number,
        home: propTypes.bool.isRequired,
        getStateFilterCategory: propTypes.string.isRequired,
        StateFilterSize: propTypes.array.isRequired,
        StateFilterBrand: propTypes.array.isRequired,
    };

    render() {

        let currentArray = [];
        if (this.props.home || this.props.getStateFilterCategory === '') {
            currentArray = product_cardCatalog
        } else {
            const CatalogArrayFilter = product_cardCatalog.filter(item => (
                (item.categorie === this.props.getStateFilterCategory) &&
                    ((item.size === 'S' && this.props.StateFilterSize[0]) ||
                (item.size === 'M' && this.props.StateFilterSize[1]) ||
                (item.size === 'L' && this.props.StateFilterSize[2]) ||
                (item.size === 'XL' && this.props.StateFilterSize[3])) &&
                ((item.brand === 'Reebok' && this.props.StateFilterBrand[0]) ||
                    (item.brand === 'Adidas' && this.props.StateFilterBrand[1]) ||
                    (item.brand === 'Nike' && this.props.StateFilterBrand[2]) ||
                    (item.brand === 'Active' && this.props.StateFilterBrand[3]))
            )
            );

            console.log(CatalogArrayFilter);

            currentArray = CatalogArrayFilter
        }


        const CatalogArray = currentArray.map((pr_card) => (
            <ProductCard
                key={pr_card.id}
                width={pr_card.width}
                height={pr_card.height}
                name={pr_card.name}
                price={pr_card.price}
                alt={pr_card.alt}
                src={pr_card.src}
                categorie={pr_card.categorie}
                size={pr_card.size}
                brand={pr_card.brand}
            />
        ));
        CatalogArray.splice(this.props.maxIndex, CatalogArray.length - this.props.maxIndex);
        return (
            <div>
                {this.props.home ?
                    <div className="arrivals__wrapper">
                        {CatalogArray}
                    </div> :
                    <div className="catalog__wrapper">
                        {CatalogArray}
                    </div>
                }
            </div>
        );
    }
}

