import { useState } from 'react';
import Header from './components/Header';
import AddNumber from './pages/AddNumber';
import AddOtp from './pages/AddOtp';
import AddPin from './pages/AddPin';
import Footer from './components/Footer';
import ScanQr from './pages/ScanQr';
import { Routes, Route } from "react-router-dom";
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
