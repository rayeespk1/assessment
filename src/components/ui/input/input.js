import React from 'react';

import './input.css';

const input = ( props ) => {
    let inputElement = null;
    let inputClasses = "InputElement";

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses += " Invalid";
    }
    inputClasses += typeof props.inputClass!=="undefined" ? " "+props.inputClass: "";

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="Input">
            {props.label && <label className="Label">{props.label}</label>}
            {inputElement}
        </div>
    );

};

export default input;