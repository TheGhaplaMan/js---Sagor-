import React from "react";
import Scanner from "react-webcam-qr-scanner";
import { useNavigate } from "react-router-dom";

const QRscanner = () => {
  const navigate = useNavigate();

  const handleDecode = (result) => {
    if (result) {
      navigate(`/user/confirm/${result.data}`);
      console.log(result.data);
    }
  };

  const handleScannerLoad = (mode) => {
    console.log(mode);
  };

  return (
    <Scanner
      className="some-classname"
      onDecode={handleDecode}
      onScannerLoad={handleScannerLoad}
      constraints={{
        audio: false,
        video: {
          facingMode: "environment",
        },
      }}
      captureSize={{ width: 720, height: 720 }}
    />
  );
};

export default QRscanner;
