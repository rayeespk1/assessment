import React from 'react';
import { NavLink } from 'react-router-dom';
import rakbankLogo from '../../../assets/images/logo.png';
import "./header.css"

const Header = (props) => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="w-100">
                    <NavLink
                        to="/"
                    >
                        <img src={rakbankLogo} className="brand-logo" alt="Rak Bank" />
                    </NavLink>
                    {props.isAuthenticated && (
                        <NavLink
                            to="/logout"
                            activeClassName="active"
                            className="f-right logout-link"
                        >Logout</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
