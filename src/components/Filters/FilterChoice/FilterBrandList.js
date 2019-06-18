import React, {Component} from 'react';
import {FilterCheckboxBrand, class_Name_Li, class_Name_Input} from './Filter.js';
import FilterItem from './FilterItem.js';

export default class FilterBrandList extends Component {

    render() {
        const FilterBrandArray = FilterCheckboxBrand.map((item) => (
            <FilterItem
                key={item.id}
                typeFilter={item.typeFilter}
                class_Name_Li={class_Name_Li}
                class_Name_Input={class_Name_Input}
                label={item.label}
                text={item.text}
                onclick={this.props.onclick}
                checked={this.props.checked[item.id]}
            />
        ));
        return (
            <ul className="filters-form__list">
                {FilterBrandArray}
            </ul>
        );
    }
}
