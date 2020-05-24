import React from 'react';
import "./item.css"

const Item = ({id, title, status, changeStatus}) => {
    return (
        <div data-testid="outerTag" className={"item " + status} onClick={()=> changeStatus(id)} >
            <p data-testid="titleTag"><b>{title}</b></p>
            <p data-testid="statusTag">{status}</p>
    </div>
    
    );
};
export default Item;
