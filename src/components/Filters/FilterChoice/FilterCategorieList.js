import React, {Component} from 'react';
import {FilterButton, class_Name_Li, class_Name_button} from './Filter.js';
import FilterItem from './FilterItem.js';

export default class FilterCategorieList extends Component {

    render() {
        const FilterButtonArray = FilterButton.map((item) => (
            <FilterItem
                key={item.id}
                typeFilter={item.typeFilter}
                class_Name_Li={class_Name_Li}
                class_Name_button={class_Name_button}
                text={item.text}
                id={'button'+item.id.toString()}
                onclick={this.props.onclick}
            />
        ));
        return (

            <ul className="filters-form__list">
                {FilterButtonArray}
            </ul>
        );
    }
}

