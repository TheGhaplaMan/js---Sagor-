import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

function QRscanner() {
  // const [qrscan, setQrscan] = useState("No result");
  const [data, setData] = useState("No result");
  console.log(data);

  const navigate = useNavigate();
  // const handleScan = (data) => {
  //   if (data) {
  //     setQrscan(data);
  //     navigate(-1);
  //     console.log(data);
  //   }
  // };
  // const handleError = (err) => {
  //   console.error(err);
  // };

  return (
    <div>
      <p>QR Scanner</p>

      <center>
        <div style={{ marginTop: 30 }}>
          {/* <QrReader
            delay={300}
            onError={handleError}
            onResult={handleScan}
            style={{ height: 100, width: 100 }}
          /> */}

          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ height: 100, width: 100 }}
          />
        </div>
      </center>

      <h3>{data}</h3>
    </div>
  );
}

export default QRscanner;
