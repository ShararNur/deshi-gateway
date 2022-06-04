import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGroup from '../components/ButtonGroup';
import { useNavigate } from "react-router-dom";

const AddOtp = (formatPhoneWithStar) => {
    const [otp, setOtp] = useState('');
    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (isNaN(otp)) {
            toast.error("Invalid otp; must be 6 digits");
        } else {
            navigate('/add-pin')
        }
    }



    return (
        <>
            <ToastContainer />
            <div className="text-center">
                <p className="fs-18">6-digit code sent to {"dynamic_number"} </p>
                <form onSubmit={onSubmit}>
                    <div className='px-4'>
                        <div className="form-floating text-success">
                            <input name="otp" type="text" className="form-control border-bottom" id="otp" placeholder="OTP" maxLength="6" value={otp} onChange={(e) => { setOtp(e.target.value) }} required />
                            <label htmlFor="otp">OTP</label>
                        </div>
                    </div>
                    <p className="fs-14">Didn't get the code? <a href="#" className="text-body fw-500">Resend</a> </p>
                    <ButtonGroup />
                </form>
            </div>
        </>
    );
};

export default AddOtp;