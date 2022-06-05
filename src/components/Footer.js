import React from 'react';
import logo from '../images/deshi.svg'

const Footer = () => {
    return (
        <div className="footer text-secondary py-2">
            <p className="container m-0 fs-14 ">Powered by <img src={logo} className="logo mb-7" alt="Deshi logo" /></p>
            <small className="fs-11">A Product of <strong>Green & Red Technologies Ltd. </strong></small>
        </div>
    );
};

export default Footer;