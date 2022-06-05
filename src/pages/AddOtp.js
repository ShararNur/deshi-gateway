import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGroup from '../components/ButtonGroup';
import { useNavigate } from "react-router-dom";

const AddOtp = ({ mobileNum }) => {
    const [otp, setOtp] = useState('');


    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        var pat1 = /^\d{6}$/;
        if (pat1.test(otp)) {
            navigate('/add-pin')
        } else {
            toast.error("Invalid otp; must be 6 digits");
        }
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     var pat1 = /^\d{6}$/;

    //     if (pat1.test(pin)) {
    //         toast.success("Pin matched");
    //     } else {
    //         toast.error("Invalid otp; must be 6 digits");
    //     }
    // }

    const formatPhoneWithStar = (phone) => {

        const prefixLength = 2;
        const suffixLength = 2;

        const prefix = phone.substring(0, prefixLength);
        const suffix = phone.slice(-suffixLength);
        const nbStars = phone.length - (prefixLength + suffixLength);

        let formattedPhone = prefix;
        for (let i = 0; i < nbStars; i++) {
            formattedPhone += '*';
        }
        formattedPhone += suffix;
        return '0' + formattedPhone;
    }

    return (
        <>
            <div className="text-center">
                <ToastContainer />
                <form onSubmit={onSubmit}>
                    <div className="padding-otp">
                        <p className="fs-18 pt-4">6-digit code sent to  {formatPhoneWithStar(mobileNum)}</p>
                        <div className='px-4 mx'>
                            <div className="form-floating text-success">
                                <input name="otp" type="text" className="form-control border-bottom" id="otp" placeholder="OTP" maxLength="6" value={otp} onChange={(e) => { setOtp(e.target.value) }} required />
                                <label htmlFor="otp">OTP</label>
                            </div>
                        </div>
                        <p className="fs-14 py-3">Didn't get the code? <a href="#" className="text-body fw-500">Resend</a> </p>
                    </div>
                    <ButtonGroup />
                </form>
            </div>
        </>
    );
};

export default AddOtp;