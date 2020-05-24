import React from 'react';
import Header from "./header/header";

const Layout = (props) => {
    return (
        <>
            <Header {...props}/>
            {props.children}
        </>
    );
};

export default Layout;
