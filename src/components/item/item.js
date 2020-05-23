import React from 'react';
import "./item.css"

const Item = ({id, title, status, changeStatus}) => {
    return (
        <div data-testid="outerTag" className={"item " + status} onClick={()=> changeStatus(id)} >
            <p data-testid="titleTag">{title}</p>
            <p data-testid="statusTag">{status}</p>
    </div>
    
    );
};
{/* <div className="banner-vertical"></div>
*/}
export default Item;
