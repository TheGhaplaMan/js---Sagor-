import React, { useState } from "react";
import { Link } from "react-router-dom";
import QrScan from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
      console.log(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrScan
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 100, width: 100 }}
          />
        </div>
      </center>

      <h3>{qrscan}</h3>
    </div>
  );
}

export default QRscanner;
