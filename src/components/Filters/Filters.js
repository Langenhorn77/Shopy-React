import React, {Component} from 'react';
import FilterPrice from './FilterPrice/FilterPrice.js';
import propTypes from "prop-types";
import FilterCategorieList from './FilterChoice/FilterCategorieList.js';
import FilterSizeList from './FilterChoice/FilterSizeList.js';
import FilterBrandList from './FilterChoice/FilterBrandList.js';

import './filters.css'

class Filters extends Component {
    static propTypes = {
        onAllClick: propTypes.func,
        checkedSize: propTypes.array,
        checkedBrand: propTypes.array,
    };
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <aside className="filters">
                <form className="filters-form" action="#" method="get">

                    <div className="filters-form__wrapper">
                        <fieldset className="filters-form__fieldset">
                            <legend>Categories</legend>
                            <FilterCategorieList
                                onclick={this.props.onAllClick}
                            />
                        </fieldset>
                    </div>

                    <div className="filters-form__wrapper">
                        <fieldset className="filters-form__fieldset">
                            <legend>Price Filter</legend>
                            <FilterPrice/>
                        </fieldset>
                    </div>

                    <div className="filters-form__wrapper">
                        <fieldset className="filters-form__fieldset">
                            <legend>Sizes</legend>
                            <FilterSizeList
                                onclick={this.props.onAllClick}
                                checked ={this.props.checkedSize}
                            />

                        </fieldset>
                    </div>

                    <div className="filters-form__wrapper">
                        <fieldset className="filters-form__fieldset">
                            <legend>Brands</legend>
                            <FilterBrandList
                                    onclick={this.props.onAllClick}
                                    checked ={this.props.checkedBrand}
                            />
                        </fieldset>
                    </div>
                    <button className="show_btn filter_button" type="submit">Search</button>
                </form>
            </aside>
        );
    }
}

Filters.propTypes = {};

export default Filters;
