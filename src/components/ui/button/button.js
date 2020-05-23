import React from 'react';

import './button.css';

const button = (props) => {
    let btnClass = "Button";
    if(props.btnClass) {
        btnClass += " "+props.btnClass;
    }
    if(props.btnType === "Success") {
        btnClass += " Success";
    } else if(props.btnType === "Danger") {
        btnClass += " Danger";
    } else if(props.btnType === "Info") {
        btnClass += " Info";
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