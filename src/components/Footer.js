import React from 'react';
import logo from '../images/deshi.svg'

const Footer = () => {
    return (
        <div className="footer text-secondary py-2">
            <div className="d-flex justify-content-center align-items-center pb-1">
                <p className="fs-14 m-0">Powered by </p>
                <img src={logo} className="logo" alt="Deshi logo" />
            </div>
            <small className="fs-11">A Product of <strong>Green & Red Technologies Ltd. </strong></small>
        </div>
    );
};

export default Footer;