import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGroup from '../components/ButtonGroup';

const AddPin = () => {
    const [pin, setPin] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        var pat1 = /^\d{4}$/;

        if (pat1.test(pin)) {
            toast.success("Pin matched");
        } else {
            toast.error("Invalid pin; must be 4 digits");
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="text-center">
                <p className="fs-18 ">Enter Your PIN</p>
                <form onSubmit={onSubmit}>
                    <div className="px-4">
                        <div className="form-floating text-success">
                            <input name="pin" type="password" className="form-control border-bottom" id="pin" placeholder="PIN" maxLength="4" value={pin} onChange={(e) => { setPin(e.target.value) }} required />
                            <label htmlFor="pin">PIN</label>
                        </div>
                    </div>
                    <ButtonGroup />
                </form>
            </div>
        </>
    );
};

export default AddPin;