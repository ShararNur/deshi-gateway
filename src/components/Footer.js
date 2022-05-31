import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="container text-secondary text-center py-3">Powered by <img src={logo} className="mb-2" alt="Deshi logo" /></footer>
    );
};

export default Footer;