import React from 'react';
import qr from '../assets/QR.svg';
import Button from './Button';

const ScanQr = () => {
    return (
        <>
            <div className='container d-flex justify-content-center py-4'>
                <img src={qr} className="w-75" alt="QR" />
            </div>
            <input type="submit" className="w-100 btn btn-lg button-close fw-bold text-white rounded-0 fs-4 py-3" value="Close" />
        </>
    );
};

export default ScanQr;