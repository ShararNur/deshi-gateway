import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNumber = ({ setCurrentPage }) => {
    const [mobileNum, setMobileNum] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (/^\d{10}$/.test(mobileNum)) {
            setCurrentPage('Otp')
        } else {
            toast.error("Invalid number; must be 10 digits");
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='text-center '>
                <p className="fs-18 pt-4">Your Deshi Account Number</p>
                <form onSubmit={onSubmit} >
                    <div className="d-flex px-4">
                        <div className="w-20 me-1">
                            <select className="form-select py-3 fw-500" aria-label="Default select example">
                                <option>+880</option>
                            </select>
                        </div>

                        <div className="form-floating mb-3 text-success w-80">
                            <input name="phone" type="tel" className="form-control border-bottom" id="phone" autoComplete="off" placeholder="Mobile number" maxLength="10" value={mobileNum} onChange={(e) => { setMobileNum(e.target.value) }} required />
                            <label htmlFor="phone">Mobile number</label>
                        </div>
                    </div>
                    <p className="fs-14 mb-3 px-4">By clicking on <span className="fw-bold">Confirm,</span>  You are agreeing to the <a href="#" className="text-body">Terms & Conditions.</a> </p>
                    <ButtonGroup />
                </form>
            </div>

        </>
    );
};

export default AddNumber;