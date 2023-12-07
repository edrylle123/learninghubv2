import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
// import Admin from "./Signup";
import Password from "./Password";
import Signup from "./Signup";
import Registration from "./Registration";
import Qrc from "./Qrc";
import Voucher from "./Voucher";
import GetVoucher from "./GetVoucher";
import Attendance from "./Attendance";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<Signup />} />
          <Route path="/admin" element={<Password />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/qrcode" element={<Qrc />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/getvoucher" element={<GetVoucher />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
