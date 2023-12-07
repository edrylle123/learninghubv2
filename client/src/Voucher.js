import React, { useState } from "react";
import Axios from "axios";
function Voucher() {
  const [number, setNumber] = useState();

  const submitbutton = () => {
    Axios.post("http://localhost:3001/api/insert/voucher", {
      number: number,
    });
    setNumber("");
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const submit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await Axios.post(
        "http://localhost:3001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>THIS IS VOUCHER PAGE</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        {/* <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        /> */}

        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
}
export default Voucher;
