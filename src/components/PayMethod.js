import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const PayMethod = () => {
    return (
        <div className='container text-center p-4'>
            <p className="payment-method">How would you like to pay?</p>
            <nav className="border p-1">
                <NavLink to='/add-number' className="w-50 btn rounded-0 fs-4 fw-600">Login to Pay</NavLink>
                <NavLink to='/scan-qr' className="w-50 btn rounded-0 fs-4 fw-600 ">Scan to Pay</NavLink>
            </nav>
        </div>
    );
};

export default PayMethod;