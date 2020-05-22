import React, { Component } from 'react';
import Spinner from '../ui/spinner/spinner';
import Input from '../ui/input/input';
import Button from '../ui/button/button';
import { updateObject, checkValidity } from '../../shared/utility';

class Add extends Component {

    state = {
        controls: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Item Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            comments: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Comments'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addItem({ title: this.state.controls.title.value, comments: this.state.controls.comments.value });
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({ controls: updatedControls });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <section className="item-form">
                <h3>Enter Item Details</h3>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <div className="close-container">
                        <p className="close-link" onClick={this.closeModal}>Cancel</p>
                        <Button btnType="Success">SAVE</Button>
                    </div>
                </form>
            </section>
        );
    }

}

export default Add;
