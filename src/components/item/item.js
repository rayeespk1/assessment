import React from 'react';
import "./item.css"

const Item = ({id, title, status, changeStatus}) => {
    return (
        <div onClick={()=> changeStatus(id)} className={"item " + status}>
            <p>{title}</p>
            <p>{status}</p>
        </div>
    );
};

export default Item;
