import React, {Component} from 'react';
import propTypes from "prop-types";

export default class FormErrors extends Component {
    static  propTypes = {
        formErrors: propTypes.array
    };

    render() {
        return (
            <div className='formErrors'>
                {Object.keys(this.props.formErrors).map((inputName, i) => {
                    if (this.props.formErrors[inputName].length > 0) {
                        return (
                            <p key={i}>{inputName} {this.props.formErrors[inputName]}</p>
                        )
                    } else {
                        return '';
                    }
                })}
            </div>
        );
    }
}
