import React from 'react';

const PayMethod = ({ payMethod, setPayMethod }) => {
    return (
        <div className='container text-center pt-4 px-4'>
            <p className="payment-method">How would you like to pay?</p>
            <div className="d-flex p-1 border border-1">
                <button type="submit" className={`w-50 btn login-or-qr rounded-0 py-2 fs-4 fw-600 ${payMethod === "LoginToPay" ? "active" : ''}`} onClick={() => setPayMethod("LoginToPay")} >Login to Pay</button>
                <button type="submit" className={`w-50 btn login-or-qr rounded-0 py-2 fs-4 fw-600 ${payMethod === "ScanQR" ? "active" : ''}`} onClick={() => setPayMethod("ScanQR")}>Scan QR Code</button>
            </div>
        </div>
    );
};

export default PayMethod;