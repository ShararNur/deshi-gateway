import { useState } from 'react';
import Header from './components/Header';
import PayMethod from './components/PayMethod';
import AddNumber from './components/AddNumber';
import AddOtp from './components/AddOtp';
import AddPin from './components/AddPin';
import Footer from './components/Footer';
import ScanQr from './components/ScanQr';

function App() {
  const [currentPage, setCurrentPage] = useState("MobileNumber");
  const [payMethod, setPayMethod] = useState('LoginToPay');

  // const numericOnly = (e) => {
  //     const value = e.target.value.replace(/\D/g, "");
  //     if (currentPage === "MobileNumber") {
  //         setMobileNum(value);
  //     }
  //     else if (currentPage === "Otp") {
  //         setOtp(value);
  //     }
  //     else {
  //         setPin(value);
  //     }
  // };

  return (
    <div className="gateway">
      <div className='form-signin'>
        <Header />
        {currentPage === "MobileNumber" && <PayMethod payMethod={payMethod} setPayMethod={setPayMethod} />}
        {
          currentPage === "MobileNumber" && payMethod === "LoginToPay" && <AddNumber setCurrentPage={setCurrentPage} />
        }
        {
          currentPage === "Otp" && <AddOtp setCurrentPage={setCurrentPage} />
        }
        {
          currentPage === "Pin" && <AddPin />
        }
        {
          payMethod === "ScanQR" && <ScanQr />
        }
        <Footer />
      </div>
    </div>


  );
}

export default App;
