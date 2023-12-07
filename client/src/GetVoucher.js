import React from "react";
import App from "./App";
function GetVoucher() {
  return (
    <div className="App">
      <div>
        <div className="input-with-asterisk">
          <input
            type="text"
            placeholder="ID Number"
            name="text"
            className="input"
            required
          />
          <span className="red-asterisk">*</span>
        </div>
      </div>
      <h1 className="vtext">this is getvoucher</h1>
    </div>
  );
}
export default GetVoucher;
