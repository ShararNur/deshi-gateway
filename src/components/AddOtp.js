import React, { useState } from 'react';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOtp = ({ setCurrentPage }) => {
    const [otp, setOtp] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (isNaN(otp)) {
            toast.error("Invalid otp; must be 6 digits");
        } else {
            setCurrentPage('Pin')
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="text-center">
                <p className="fs-18 mt-4">6-digit code sent to </p>
                <form onSubmit={onSubmit}>
                    <div className='px-4'>
                        <div className="form-floating mb-3 text-success">
                            <input name="otp" type="text" className="form-control border-bottom" id="otp" placeholder="OTP" maxLength="6" value={otp} onChange={(e) => { setOtp(e.target.value) }} required />
                            <label htmlFor="otp">OTP</label>
                        </div>
                    </div>
                    <p className="fs-14 mb-4">Didn't get the code? <a href="#" className="text-body fw-500">Resend</a> </p>
                    <Button />
                </form>
            </div>
        </>
    );
};

export default AddOtp;