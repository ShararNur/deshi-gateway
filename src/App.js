import { useEffect, useState } from 'react';
import Header from './components/Header';
import PayMethod from './components/PayMethod';
import AddNumber from './pages/AddNumber';
import AddOtp from './pages/AddOtp';
import AddPin from './pages/AddPin';
import Footer from './components/Footer';
import ScanQr from './pages/ScanQr';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  const [mobileNum, setMobileNum] = useState("");



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

  // const formatPhoneWithStar = (phone) => {

  //   const prefixLength = 4;
  //   const suffixLength = 3;

  //   const prefix = phone.substring(0, prefixLength);
  //   const suffix = phone.slice(-suffixLength);
  //   const nbStars = phone.length - (prefixLength + suffixLength);

  //   let formattedPhone = prefix;
  //   for (let i = 0; i < nbStars; i++) {
  //     formattedPhone += '*';
  //   }
  //   formattedPhone += suffix;

  //   return formattedPhone;
  // }


  return (
    <div className="app" >
      <div className="gateway">
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/add-number" element={<AddNumber mobileNum={mobileNum} setMobileNum={setMobileNum} />} />
          <Route path="/add-otp" element={<AddOtp mobileNum={mobileNum} />} />
          <Route path="/add-pin" element={<AddPin />} />
          <Route path="/scan-qr" element={<ScanQr />} />
        </Routes>
        <Footer />
      </div>
    </div >


  );
}

export default App;
