import React from 'react';
import sharetrip from '../assets/sharetrip.svg'

const Header = () => {
    return (
        <div className="container header p-4 py-3">
            <div className="top-left">
                <img src={sharetrip} className="me-3" alt="merchant logo" />
                <div className="mt-3 lh-sm">
                    <h5 className="custom-title">ShareTrip Limited</h5>
                    <p className="text-secondary order-id">Order ID: 8KU70146GY</p>
                </div>
            </div>
            <h3 className="fs-24">৳ 5,000</h3>
        </div>
    );
};

export default Header;