import React, {Component} from 'react';
import '../FormOrder/form-order.css';
import FormErrors from '../FormErrors/FormErrors.js';

class FormOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
             tel: '',
            formErrors: {
                 name: '',
                email: '',
                 tel: '',
            },
            nameValid: false,
            emailValid: false,
            telValid: false,
            formValid: false
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateInput(name, value)
            }
        );
    };

    validateInput(inputName, value) {
        let inputValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let telValid = this.state.telValid;

        switch (inputName) {
            case 'name':
                nameValid = value.match(/[a-zA-Z0-9_]/) && value.length < 30;
                inputValidationErrors.name = nameValid ? '' : ' is invalid !';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                inputValidationErrors.email = emailValid ? '' : ' is invalid !';
                break;
            case 'tel':
                telValid = value.match(/[0-9]/) && value.length > 10;
                inputValidationErrors.tel = telValid ? '' : ' is invalid !';
                break;
            default:
                break;
        }
        this.setState({
                formErrors: inputValidationErrors,
                nameValid: nameValid,
                emailValid: emailValid,
                telValid: telValid
            }, this.validateForm
        )
    };

    validateForm() {
        this.setState({
            formValid: this.state.nameValid && this.state.emailValid &&
                this.state.telValid
        });
    }

    render() {
        return (
            <form className="form-order">
                <div className="form-order__error">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>
                <fieldset className="form-order__contacts">
                    <div className="form-order__wrapper">
                        <p>
                            <label htmlFor="name">Your Name</label>
                            <input onChange={this.handleUserInput} type="text" id="name" name="name" value={this.state.name}/>
                        </p>

                        <p>
                            <label htmlFor="mail">Your E-mail</label>
                            <input onChange={this.handleUserInput} type="email" id="email" name="email" value={this.state.email}/>
                        </p>

                        <p>
                            <label htmlFor="tel">Your Telephone</label>
                            <input onChange={this.handleUserInput} type="text" id="tel" name="tel" value={this.state.tel}/>
                        </p>
                    </div>

                    <div className="form-order__wrapper">
                        <p><label htmlFor="adress">Your Adress</label>
                            <textarea id="adress"></textarea>
                        </p>

                        <p>
                            <label htmlFor="info">Additional Information</label>
                            <textarea id="info"></textarea>
                        </p>
                    </div>
                    <button type="submit" disabled={!this.state.formValid}>Order Now</button>
                </fieldset>
            </form>
        );
    }
}

FormOrder.propTypes = {};

export default FormOrder;
