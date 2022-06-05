import React, { useState } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"; import PayMethod from '../components/PayMethod';
;

const AddNumber = ({ mobileNum, setMobileNum }) => {

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (/^\d{10}$/.test(mobileNum)) {
            navigate('/add-otp');
        } else {
            toast.error("Invalid number; must be 10 digits");
        }
    }




    return (
        <>
            <div className='text-center'>
                <ToastContainer />
                <PayMethod />
                <form onSubmit={onSubmit} >
                    <div className='padding-number'>
                        <p className="fs-18">Your Deshi Account Number</p>
                        <div className="d-flex w-100 px-4">
                            <div className="me-1 w-20">
                                <select className="form-select py-3 fw-500" aria-label="Default select example">
                                    <option>+880</option>
                                </select>
                            </div>

                            <div className="form-floating mb-3 text-success w-80">
                                <input name="phone" type="tel" className="form-control border-bottom" id="phone" autoComplete="off" placeholder="Mobile number" maxLength="10" value={mobileNum} onChange={(e) => { setMobileNum(e.target.value) }} required />
                                <label htmlFor="phone">Mobile number</label>
                            </div>
                        </div>
                        <p className="fs-14 mb-3 pb-4">By clicking on <span className="fw-bold">Confirm,</span>  You are agreeing to the <a href="#" className="text-body">Terms & Conditions.</a> </p>
                    </div>
                    <ButtonGroup />
                    {/* <Button /> */}
                </form>
            </div>

        </>
    );
};

export default AddNumber;