import React, {Component} from 'react';
import propTypes from "prop-types";

export default class FilterItem extends Component {
    static  propTypes = {
        typeFilter: propTypes.string.isRequired,
        class_Name_Li: propTypes.string,
        class_Name_button: propTypes.string,
        class_Name_Input: propTypes.string,
        label: propTypes.string,
        text: propTypes.string.isRequired,
        onclick: propTypes.func.isRequired,
        checked: propTypes.bool
    };


    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
            {(this.props.typeFilter === 'checkbox') ?
                //Выводится чекбокс
                <li className={this.props.class_Name_Li}>
                        <input className={this.props.class_Name_Input}
                               type={this.props.typeFilter}
                               name={this.props.label}
                               id={this.props.label}
                               onClick={this.props.onclick}
                               checked = {this.props.checked}
                        />

                        <label htmlFor={this.props.label}><span className="checkbox-indicator"></span>
                            {this.props.text}
                        </label>
                    </li> :
                //Выводится кнопка
                    <li className={this.props.class_Name_Li}>
                        <button onClick={this.props.onclick} className={this.props.class_Name_button}
                                type={this.props.typeFilter} id={this.props.id}>{this.props.text}</button>
                    </li>
            }
            </div>
        );
    }
    }


