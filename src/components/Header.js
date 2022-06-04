import React from 'react';
import sharetrip from '../images/sharetrip.svg'

const Header = () => {
    return (
        <div className="container header p-4 py-2">
            <div className="top-left">
                <img src={sharetrip} className="me-3" alt="merchant logo" />
                <div className="lh-sm mt-3">
                    <h5 className="custom-title">ShareTrip Limited</h5>
                    <p className="text-secondary order-id">Order ID: 8KU70146GY</p>
                </div>
            </div>
            <h3 className="fs-24">৳ 5,000</h3>
        </div>
    );
};

export default Header;