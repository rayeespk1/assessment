import React from 'react';

import './button.css';

const button = (props) => {
    let btnClass = "Button";
    if(props.btnType === "Success") {
        btnClass += " Success";
    } else if(props.btnType === "Danger") {
        btnClass += " Danger";
    } 
    return (
        <button
            data-testid="buttonTag"
            disabled={props.disabled}
            className={btnClass}
            onClick={props.clicked}>{props.children}</button>
    );

}

export default button;