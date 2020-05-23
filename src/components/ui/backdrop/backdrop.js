import React from 'react';

import './backdrop.css';

const backdrop = (props) => (
    props.show ? <div data-testid="backdropTag" className="Backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;