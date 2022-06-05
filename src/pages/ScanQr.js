import React from 'react';
import PayMethod from '../components/PayMethod';
import qr from '../images/QR.svg';


const ScanQr = () => {
    return (
        <>
            <div>
                <PayMethod />
                <div className="d-flex justify-content-center padding-bottom ">
                    <img src={qr} className="w-71" alt="QR" />
                </div>
                <input type="submit" className="w-100 btn btn-lg button-close fw-bold text-white rounded-0 fs-4 py-2" value="Close" />
            </div>
        </>
    );
};

export default ScanQr;