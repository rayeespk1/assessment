import React from 'react';
import rakbankLogo from '../../../assets/images/logo.png';
import './loader.css';

const Loader = (props) => {
    return (
        <div id="loading">
            <div style={{ height: "100%", textAlign: "center" }}>
                <div style={{ height: "50%", margin: "0 0 -140px" }}></div>
                <div className="loader-content" />
                <img src={rakbankLogo} className="loader-brand-logo" alt="Rak Bank" />
                <div id="nlpt"></div>
                <div style={{ animation: "a-s .25s 1.25s 1 forwards", opacity: "0" }} className="msg">Loading...&hellip;</div>

            </div>
        </div>
    );

};

export default Loader;