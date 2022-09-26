import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

const QRscanner = () => {
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
      <h3>{data}</h3>

      <center>
        <div style={{ marginTop: 30, height: 100, width: 100 }}>
          {/* <QrReader
            delay={300}
            onError={handleError}
            onResult={handleScan}
            style={{ height: 100, width: 100 }}
          /> */}

          <QrReader
            onResult={(result, error) => {
              if (result) {
                setData(result.text);
                console.log(result);
              }

              if (error) {
                console.info(error);
              }
            }}
            // style={{ height: 100, width: 100 }}
            delay={500}
          />
        </div>
      </center>
    </div>
  );
};

export default QRscanner;
