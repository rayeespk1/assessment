import React from 'react';
import rakbankLogo from '../../../assets/images/logo.png';
import './loader.css';

const Loader = (props) => {
    return (
        <div id="loading">
            <div className="one">
                <div className="two"></div>
            </div>
            <div className="three">
                <div className="four"></div>
                <div className="five">
                    <img src={rakbankLogo} alt="Rak Bank" className="zoom-ani" width="130px" />
                </div>
                <div id="nlpt"></div>
                <div className="six msg">Loading...</div>
            </div>
        </div>
    );

};

export default Loader;