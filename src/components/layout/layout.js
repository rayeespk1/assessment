import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = (props) => {
    return (
        <>
            <Header {...props}/>
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
