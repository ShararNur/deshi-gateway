import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import sharetrip from '../../img/sharetrip.svg'
import { useForm } from "react-hook-form";
import qr from '../../img/QR.svg';
import './Login.css';

const Login = () => {
    const [currentPage, setCurrentPage] = useState("MobileNumber");
    const [mobileNum, setMobileNum] = useState();
    const [otp, setOtp] = useState();
    const [pin, setPin] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [payMethod, setPayMethod] = useState('LoginToPay');



    const numericOnly = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (currentPage === "MobileNumber") {
            setMobileNum(value);
        }
        else if (currentPage === "Otp") {
            setOtp(value);
        }
        else {
            setPin(value);
        }
    };

    const onSubmit = (data) => {
        // console.log(data);
    };

    function confirmNum(mobileNum) {
        if (mobileNum.length === 10) {
            setCurrentPage("Otp")
        }
    }

    function confirmOtp(otp) {
        if (otp.length === 6) {
            setCurrentPage("Pin")
        }
    }

    function confirmPin(pin) {
        if (pin.length === 4) {
            setCurrentPage("Pin")
        }
    }

    return (
        <div className="gateway">
            <div className="form-signin">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Header    */}

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

                    <div className="container main text-center pt-4 p-4 ">
                        {
                            currentPage === "MobileNumber" && <div>
                                <p className="payment-method">How would you like to pay?</p>
                                <div className="d-flex p-1 border border-1">
                                    <button type="submit" className={`w-50 btn login-or-qr rounded-0 py-2 fs-4 fw-600 ${payMethod === "LoginToPay" ? "active" : ''}`} onClick={() => setPayMethod("LoginToPay")} >Login to Pay</button>
                                    <button type="submit" className={`w-50 btn login-or-qr rounded-0 py-2 fs-4 fw-600 ${payMethod === "ScanQR" ? "active" : ''}`} onClick={() => setPayMethod("ScanQR")}>Scan QR Code</button>
                                    {/* <input type="submit" className="w-50 btn btn-loginToPay rounded-0 py-2 fs-4" value="Login to Pay" />
                                <input type="submit" className="w-50 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4" value="Scan QR Code" /> */}
                                </div>
                            </div>
                        }

                        {
                            currentPage === "MobileNumber" && payMethod === "LoginToPay" && <p className="fs-18 mt-4">Your Deshi Account Number</p>
                        }
                        {
                            currentPage === "Otp" && <p className="fs-18">6-digit code sent to {0 + mobileNum}</p>
                        }
                        {
                            currentPage === "Pin" && <p className="fs-18">Enter Your PIN</p>
                        }


                        {/* Input Field */}


                        {
                            currentPage === "MobileNumber" && payMethod === "LoginToPay" &&
                            <div className="d-flex w-100">
                                <div className="w-20 me-1">
                                    <select className="form-select py-3 fw-500" aria-label="Default select example">
                                        <option>+880</option>
                                    </select>
                                </div>

                                <div className="form-floating mb-3 text-success w-80">
                                    {/* <select><option>+880</option></select> */}
                                    <input name="phone" type="tel" className="form-control number" id="phone" autoComplete="off" placeholder="Mobile number" maxLength="10" pattern="[0-9]*" value={mobileNum} onChange={numericOnly} required />
                                    <label htmlFor="phone">Mobile number</label>
                                </div>
                            </div>
                        }


                        {
                            currentPage === "Otp" && <div className="form-floating mb-3 text-success">
                                <input name="otp" type="text" className="form-control" id="otp" placeholder="OTP" maxLength="6" value={otp} onChange={numericOnly} required />
                                {/* <input value={otp} onChange={handleChange} /> */}
                                <label htmlFor="otp">OTP</label>

                            </div>
                        }
                        {
                            currentPage === "Pin" && <div className="form-floating mb-3 text-success">
                                <input name="pin" type="password" className="form-control" id="pin" placeholder="PIN" maxLength="4" value={pin} onChange={numericOnly} required />
                                <label htmlFor="pin">PIN</label>
                            </div>
                        }


                        {
                            currentPage === "MobileNumber" && payMethod === "LoginToPay" && <p className="fs-14 mb-2">By clicking on <span className="fw-bold">Confirm,</span>  You are agreeing to the <a href="#" className="text-body">Terms & Conditions.</a> </p>

                        }
                        {
                            currentPage === "Otp" && <p className="fs-14 mb-2">Didn't get the code? <a href="#" className="text-body fw-500">Resend</a> </p>
                        }
                    </div>

                    {
                        payMethod === "ScanQR" && <div className="d-flex justify-content-center pb-4">
                            <img src={qr} className="w-75" alt="QR" />
                        </div>
                    }



                    {/* Button */}


                    {
                        currentPage === "MobileNumber" && payMethod === "LoginToPay" &&
                        <div className="d-flex">
                            <input type="submit" className="w-50 btn btn-lg button-close fw-bold text-white rounded-0 py-3 fs-4" value="Close" />
                            <input type="submit" className="w-50 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4" value="Confirm" onClick={() => confirmNum(mobileNum)} />
                        </div>
                    }
                    {
                        currentPage === "Otp" &&
                        <div className="d-flex">
                            <input type="submit" className="w-100 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4 py-3" value="Confirm" onClick={() => confirmOtp(otp)} />
                            {/* <input className="w-100 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4 py-3" onClick={() => setCurrentPage("Pin")}>Confirm</input> */}
                        </div>
                    }
                    {
                        currentPage === "Pin" &&
                        <div className="d-flex">
                            <input type="submit" className="w-100 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4 py-3" value="Confirm" />
                            {/* <input className="w-100 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4 py-3" onClick>Confirm</input> */}
                        </div>
                    }
                    {
                        payMethod === "ScanQR" &&
                        <input type="submit" className="w-100 btn btn-lg button-close fw-bold text-white rounded-0 py-3 fs-4" value="Close" />
                    }

                    {/* footer */}

                    <footer className="container text-secondary text-center py-3">Powered by <img src={logo} className="mb-2" alt="Deshi logo" /></footer>
                </form>
            </div >
        </div >
    );
};


export default Login;